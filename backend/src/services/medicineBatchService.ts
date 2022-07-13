import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import MedicineBatchRepository from '../database/repositories/medicineBatchRepository';
import PurchaseInvoiceRepository from '../database/repositories/purchaseInvoiceRepository';
import MedicineEnumRepository from '../database/repositories/medicineEnumRepository';
import VendorRepository from '../database/repositories/vendorRepository';

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
      data.vendor = await VendorRepository.filterIdInTenant(data.vendor, { ...this.options, transaction });

      const record = await MedicineBatchRepository.create(data, {
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
      data.vendor = await VendorRepository.filterIdInTenant(data.vendor, { ...this.options, transaction });

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
