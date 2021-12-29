import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import MedicalHistoryRepository from '../database/repositories/medicalHistoryRepository';
import PatientRepository from '../database/repositories/patientRepository';
import ChronicDiseaseEnumRepository from '../database/repositories/chronicDiseaseEnumRepository';

export default class MedicalHistoryService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.patient = await PatientRepository.filterIdInTenant(data.patient, { ...this.options, transaction });
      data.chronicDisease1 = await ChronicDiseaseEnumRepository.filterIdInTenant(data.chronicDisease1, { ...this.options, transaction });
      data.chronicDisease2 = await ChronicDiseaseEnumRepository.filterIdInTenant(data.chronicDisease2, { ...this.options, transaction });
      data.chronicDisease3 = await ChronicDiseaseEnumRepository.filterIdInTenant(data.chronicDisease3, { ...this.options, transaction });

      const record = await MedicalHistoryRepository.create(data, {
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
        'medicalHistory',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.patient = await PatientRepository.filterIdInTenant(data.patient, { ...this.options, transaction });
      data.chronicDisease1 = await ChronicDiseaseEnumRepository.filterIdInTenant(data.chronicDisease1, { ...this.options, transaction });
      data.chronicDisease2 = await ChronicDiseaseEnumRepository.filterIdInTenant(data.chronicDisease2, { ...this.options, transaction });
      data.chronicDisease3 = await ChronicDiseaseEnumRepository.filterIdInTenant(data.chronicDisease3, { ...this.options, transaction });

      const record = await MedicalHistoryRepository.update(
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
        'medicalHistory',
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
        await MedicalHistoryRepository.destroy(id, {
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
    return MedicalHistoryRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return MedicalHistoryRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return MedicalHistoryRepository.findAndCountAll(
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
    const count = await MedicalHistoryRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
