import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import PurchaseOrderRepository from '../database/repositories/purchaseOrderRepository';
import VendorRepository from '../database/repositories/vendorRepository';
import PurchaseOrderEntryRepository from '../database/repositories/purchaseOrderEntryRepository';
import PurchaseInvoiceRepository from '../database/repositories/purchaseInvoiceRepository';

export default class PurchaseOrderService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.vendor = await VendorRepository.filterIdInTenant(data.vendor, { ...this.options, transaction });
      data.entries = await PurchaseOrderEntryRepository.filterIdsInTenant(data.entries, { ...this.options, transaction });
      data.invoices = await PurchaseInvoiceRepository.filterIdsInTenant(data.invoices, { ...this.options, transaction });

      const record = await PurchaseOrderRepository.create(data, {
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
        'purchaseOrder',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.vendor = await VendorRepository.filterIdInTenant(data.vendor, { ...this.options, transaction });
      data.entries = await PurchaseOrderEntryRepository.filterIdsInTenant(data.entries, { ...this.options, transaction });
      data.invoices = await PurchaseInvoiceRepository.filterIdsInTenant(data.invoices, { ...this.options, transaction });

      const record = await PurchaseOrderRepository.update(
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
        'purchaseOrder',
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
        await PurchaseOrderRepository.destroy(id, {
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
    return PurchaseOrderRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PurchaseOrderRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PurchaseOrderRepository.findAndCountAll(
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
    const count = await PurchaseOrderRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
