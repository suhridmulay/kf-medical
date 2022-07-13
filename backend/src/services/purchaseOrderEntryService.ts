import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import PurchaseOrderEntryRepository from '../database/repositories/purchaseOrderEntryRepository';
import PurchaseOrderRepository from '../database/repositories/purchaseOrderRepository';
import MedicineEnumRepository from '../database/repositories/medicineEnumRepository';

export default class PurchaseOrderEntryService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.purchaseOrder = await PurchaseOrderRepository.filterIdInTenant(data.purchaseOrder, { ...this.options, transaction });
      data.medicine = await MedicineEnumRepository.filterIdInTenant(data.medicine, { ...this.options, transaction });

      const record = await PurchaseOrderEntryRepository.create(data, {
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
        'purchaseOrderEntry',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.purchaseOrder = await PurchaseOrderRepository.filterIdInTenant(data.purchaseOrder, { ...this.options, transaction });
      data.medicine = await MedicineEnumRepository.filterIdInTenant(data.medicine, { ...this.options, transaction });

      const record = await PurchaseOrderEntryRepository.update(
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
        'purchaseOrderEntry',
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
        await PurchaseOrderEntryRepository.destroy(id, {
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
    return PurchaseOrderEntryRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PurchaseOrderEntryRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PurchaseOrderEntryRepository.findAndCountAll(
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
    const count = await PurchaseOrderEntryRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
