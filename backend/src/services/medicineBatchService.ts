import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import MedicineBatchRepository from '../database/repositories/medicineBatchRepository';
import PurchaseInvoiceRepository from '../database/repositories/purchaseInvoiceRepository';
import MedicineEnumRepository from '../database/repositories/medicineEnumRepository';
import VendorRepository from '../database/repositories/vendorRepository';
import HealthCenterRepository from '../database/repositories/healthCenterRepository';
import AWSStorage from './file/awsFileStorage';
import SiteInventoryRepository from '../database/repositories/siteInventoryRepository';
import medicineEnum from '../database/models/medicineEnum';

export default class MedicineBatchService {
  options: IServiceOptions;


  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.invoice = await PurchaseInvoiceRepository.filterIdInTenant(data.invoice, { ...this.options, transaction });
      data.medicine = await MedicineEnumRepository.filterIdInTenant(data.medicine, { ...this.options, transaction });

      let medicine = await MedicineEnumRepository.findById(data.medicine, { ...this.options, transaction });
      data.medicineBatchLookup = medicine.medicineName + " | Exp:" + data.expiryDate + " | Batch:" + data.batchNumber;

      const record = await MedicineBatchRepository.create(data, {
        ...this.options,
        transaction,
      });

      let multiplier = 1;
      if (data.qtyInStrips === true) {
        multiplier = medicine.tabletsPerStrip;
      }

      let lookupFilter = {'isHeadoffice': true};
      let headOfficeData = await HealthCenterRepository.findAndCountAll({filter: lookupFilter}, { ...this.options, transaction });
      let headOffice = headOfficeData.rows[0];

      let inventoryData = {
        inventoryAddDate: data.inventoryAddDate,
        expiryDate: data.expiryDate,
        medicine: medicine.id,
        batchNumber: record.id,
        center: headOffice.id,
        initialCount: data.quantity * multiplier,
        currentCount: data.quantity * multiplier,
        siteBatchIdentifier:  headOffice.name + " | " + data.medicineBatchLookup
      }

      const inventoryRecord = await SiteInventoryRepository.create(inventoryData, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'medicineBatch',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.invoice = await PurchaseInvoiceRepository.filterIdInTenant(data.invoice, { ...this.options, transaction });
      data.medicine = await MedicineEnumRepository.filterIdInTenant(data.medicine, { ...this.options, transaction });

      const record = await MedicineBatchRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'medicineBatch',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await MedicineBatchRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  async findById(id) {
    return MedicineBatchRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return MedicineBatchRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return MedicineBatchRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await MedicineBatchRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
