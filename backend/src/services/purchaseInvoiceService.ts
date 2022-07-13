import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import PurchaseInvoiceRepository from '../database/repositories/purchaseInvoiceRepository';
import PurchaseOrderRepository from '../database/repositories/purchaseOrderRepository';
import MedicineBatchRepository from '../database/repositories/medicineBatchRepository';

export default class PurchaseInvoiceService {
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
      data.batches = await MedicineBatchRepository.filterIdsInTenant(data.batches, { ...this.options, transaction });

      const record = await PurchaseInvoiceRepository.create(data, {
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
        'purchaseInvoice',
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
      data.batches = await MedicineBatchRepository.filterIdsInTenant(data.batches, { ...this.options, transaction });

      const record = await PurchaseInvoiceRepository.update(
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
        'purchaseInvoice',
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
        await PurchaseInvoiceRepository.destroy(id, {
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
    return PurchaseInvoiceRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PurchaseInvoiceRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PurchaseInvoiceRepository.findAndCountAll(
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
    const count = await PurchaseInvoiceRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
