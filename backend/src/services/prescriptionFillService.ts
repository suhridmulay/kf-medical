import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import PrescriptionFillRepository from '../database/repositories/prescriptionFillRepository';
import PatientVisitRepository from '../database/repositories/patientVisitRepository';
import SiteInventoryRepository from '../database/repositories/siteInventoryRepository';

export default class PrescriptionFillService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.patientVisit = await PatientVisitRepository.filterIdInTenant(data.patientVisit, { ...this.options, transaction });
      data.siteInventory = await SiteInventoryRepository.filterIdInTenant(data.siteInventory, { ...this.options, transaction });

      const record = await PrescriptionFillRepository.create(data, {
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
        'prescriptionFill',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.patientVisit = await PatientVisitRepository.filterIdInTenant(data.patientVisit, { ...this.options, transaction });
      data.siteInventory = await SiteInventoryRepository.filterIdInTenant(data.siteInventory, { ...this.options, transaction });

      const record = await PrescriptionFillRepository.update(
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
        'prescriptionFill',
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
        await PrescriptionFillRepository.destroy(id, {
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
    return PrescriptionFillRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PrescriptionFillRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PrescriptionFillRepository.findAndCountAll(
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
    const count = await PrescriptionFillRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
