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

  async fillInEntriesCostAndTaxes(data, options, transaction) {
    let poEntries = await PurchaseOrderEntryRepository.findEntriesByIdList(data.entries, { ...options, transaction });
    let totalCost = 0.0, stateTaxes = 0.0, centralTaxes = 0.0;

    poEntries.rows.every(elem => totalCost += Number(elem.totalCost));
    poEntries.rows.every(elem => stateTaxes += Number(elem.stateGST));
    poEntries.rows.every(elem => centralTaxes += Number(elem.centralGST));

    data.sumEntriesCost = totalCost;
    data.totalGST = centralTaxes + stateTaxes;
  }

  calculateNetAmount(data) {
    data.freightAmount |= 0.0;
    data.discount |= 0.0;
    data.writeOffAmount |= 0.0;

    data.netAmount = data.sumEntriesCost + data.totalGST + data.freightAmount - data.discount - data.writeOffAmount;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.vendor = await VendorRepository.filterIdInTenant(data.vendor, { ...this.options, transaction });
      data.entries = await PurchaseOrderEntryRepository.filterIdsInTenant(data.entries, { ...this.options, transaction });
      data.invoices = await PurchaseInvoiceRepository.filterIdsInTenant(data.invoices, { ...this.options, transaction });

      let vendor = await VendorRepository.findById(data.vendor, { ...this.options, transaction });
      data.purchaseOrderLookup  = vendor.vendorName + "|" + data.purchaseOrderNumber;

      await this.fillInEntriesCostAndTaxes(data, this.options, transaction);
      this.calculateNetAmount(data);

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

      await this.fillInEntriesCostAndTaxes(data, this.options, transaction);
      this.calculateNetAmount(data);
      
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

  async count() {
    return PurchaseOrderRepository.count({}, this.options);
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
