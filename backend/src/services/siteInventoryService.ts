import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import SiteInventoryRepository from '../database/repositories/siteInventoryRepository';
import HealthCenterRepository from '../database/repositories/healthCenterRepository';
import MedicineBatchRepository from '../database/repositories/medicineBatchRepository';
import MedicineEnumRepository from '../database/repositories/medicineEnumRepository';

export default class SiteInventoryService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.center = await HealthCenterRepository.filterIdInTenant(data.center, { ...this.options, transaction });
      data.batchNumber = await MedicineBatchRepository.filterIdInTenant(data.batchNumber, { ...this.options, transaction });
      data.medicine = await MedicineEnumRepository.filterIdInTenant(data.medicine, { ...this.options, transaction });

      const record = await SiteInventoryRepository.create(data, {
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
        'siteInventory',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.center = await HealthCenterRepository.filterIdInTenant(data.center, { ...this.options, transaction });
      data.batchNumber = await MedicineBatchRepository.filterIdInTenant(data.batchNumber, { ...this.options, transaction });
      data.medicine = await MedicineEnumRepository.filterIdInTenant(data.medicine, { ...this.options, transaction });

      const record = await SiteInventoryRepository.update(
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
        'siteInventory',
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
        await SiteInventoryRepository.destroy(id, {
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
    return SiteInventoryRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return SiteInventoryRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return SiteInventoryRepository.findAndCountAll(
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
    const count = await SiteInventoryRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
