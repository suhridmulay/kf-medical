import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import TransferRepository from '../database/repositories/transferRepository';
import HealthCenterRepository from '../database/repositories/healthCenterRepository';
import MedicineBatchRepository from '../database/repositories/medicineBatchRepository';
import SiteInventoryRepository from '../database/repositories/siteInventoryRepository';
import { and } from 'sequelize/types';

export default class TransferService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.fromCenter = await HealthCenterRepository.filterIdInTenant(data.fromCenter, { ...this.options, transaction });
      data.toCenter = await HealthCenterRepository.filterIdInTenant(data.toCenter, { ...this.options, transaction });
      data.medicineBatch = await MedicineBatchRepository.filterIdInTenant(data.medicineBatch, { ...this.options, transaction });

      const record = await TransferRepository.create(data, {
        ...this.options,
        transaction,
      });
      
      // Fix up the site inventories - decrease at source and increase at destination
      let inventoryAtSourceCenter = await SiteInventoryRepository.findAndCountAll({filter: {center: data.fromCenter, batchNumber: data.medicineBatch}}, this.options);
      let inventoryAtDestCenter = await SiteInventoryRepository.findAndCountAll({filter: {center: data.toCenter, batchNumber: data.medicineBatch}}, this.options);

      if (inventoryAtSourceCenter.count > 0) {
        let srcInventoryRecord = inventoryAtSourceCenter.rows[0];
        let toCenterDetails = await HealthCenterRepository.findById(data.toCenter, this.options);
        let medicineBatchDetails = await MedicineBatchRepository.findById(data.medicineBatch, this.options);

        if (inventoryAtDestCenter.count == 0) { // create a new entry
          let inventoryData = {
            center: data.toCenter,
            medicine: srcInventoryRecord.medicineId,
            batchNumber: srcInventoryRecord.batchNumberId,
            expiryDate: srcInventoryRecord.expiryDate,
            inventoryAddDate: data.transferDate,
            initialCount: data.transferQuantity,
            currentCount: data.transferQuantity,
            siteBatchIdentifier: toCenterDetails.name + " | " + medicineBatchDetails.medicineBatchLookup,
          };
          const inventoryRecord = await SiteInventoryRepository.create(inventoryData, {
            ...this.options,
            transaction,
          });
        } else { // Update the record found
          let destInventoryRecord = inventoryAtDestCenter.rows[0];
          destInventoryRecord.currentCount += data.transferQuanity;

          // Updates require the IDs as opposed to the expanded record 
          destInventoryRecord.medicine = destInventoryRecord.medicineId;
          destInventoryRecord.batchNumber = destInventoryRecord.batchNumberId;
          destInventoryRecord.center = destInventoryRecord.centerId;

          let result2 = await SiteInventoryRepository.update(destInventoryRecord.id, destInventoryRecord, {...this.options, transaction,});
        }
        
        srcInventoryRecord.currentCount -= data.transferQuantity;

        // Updates require the IDs as opposed to the expanded record 
        srcInventoryRecord.medicine = srcInventoryRecord.medicineId;
        srcInventoryRecord.batchNumber = srcInventoryRecord.batchNumberId;
        srcInventoryRecord.center = srcInventoryRecord.centerId;

        let result1 = await SiteInventoryRepository.update(srcInventoryRecord.id, srcInventoryRecord, {...this.options, transaction,});
      }
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
        'transfer',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.fromCenter = await HealthCenterRepository.filterIdInTenant(data.fromCenter, { ...this.options, transaction });
      data.toCenter = await HealthCenterRepository.filterIdInTenant(data.toCenter, { ...this.options, transaction });
      data.medicineBatch = await MedicineBatchRepository.filterIdInTenant(data.medicineBatch, { ...this.options, transaction });

      const record = await TransferRepository.update(
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
        'transfer',
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
        await TransferRepository.destroy(id, {
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
    return TransferRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return TransferRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return TransferRepository.findAndCountAll(
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
    const count = await TransferRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
