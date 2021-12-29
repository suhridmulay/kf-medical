import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import PatientRepository from '../database/repositories/patientRepository';
import MedicalHistoryRepository from '../database/repositories/medicalHistoryRepository';
import PatientVisitRepository from '../database/repositories/patientVisitRepository';
import PatientDocumentRepository from '../database/repositories/patientDocumentRepository';

export default class PatientService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.medicalHistory = await MedicalHistoryRepository.filterIdInTenant(data.medicalHistory, { ...this.options, transaction });
      data.medicalVisits = await PatientVisitRepository.filterIdsInTenant(data.medicalVisits, { ...this.options, transaction });
      data.medicalDocuments = await PatientDocumentRepository.filterIdsInTenant(data.medicalDocuments, { ...this.options, transaction });

      const record = await PatientRepository.create(data, {
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
        'patient',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.medicalHistory = await MedicalHistoryRepository.filterIdInTenant(data.medicalHistory, { ...this.options, transaction });
      data.medicalVisits = await PatientVisitRepository.filterIdsInTenant(data.medicalVisits, { ...this.options, transaction });
      data.medicalDocuments = await PatientDocumentRepository.filterIdsInTenant(data.medicalDocuments, { ...this.options, transaction });

      const record = await PatientRepository.update(
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
        'patient',
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
        await PatientRepository.destroy(id, {
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
    return PatientRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PatientRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PatientRepository.findAndCountAll(
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
    const count = await PatientRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
