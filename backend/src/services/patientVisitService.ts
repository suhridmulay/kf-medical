import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import PatientVisitRepository from '../database/repositories/patientVisitRepository';
import PatientRepository from '../database/repositories/patientRepository';
import HealthCenterRepository from '../database/repositories/healthCenterRepository';
import DoctorRepository from '../database/repositories/doctorRepository';
import SymptomsEnumRepository from '../database/repositories/symptomsEnumRepository';
import MedicineEnumRepository from '../database/repositories/medicineEnumRepository';
import SiteInventoryRepository from '../database/repositories/siteInventoryRepository';

export default class PatientVisitService {
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
      data.medicalCenter = await HealthCenterRepository.filterIdInTenant(data.medicalCenter, { ...this.options, transaction });
      data.doctor = await DoctorRepository.filterIdInTenant(data.doctor, { ...this.options, transaction });
      data.symptom1 = await SymptomsEnumRepository.filterIdInTenant(data.symptom1, { ...this.options, transaction });
      data.symptom2 = await SymptomsEnumRepository.filterIdInTenant(data.symptom2, { ...this.options, transaction });
      data.symptom3 = await SymptomsEnumRepository.filterIdInTenant(data.symptom3, { ...this.options, transaction });
      data.medicine1 = await MedicineEnumRepository.filterIdInTenant(data.medicine1, { ...this.options, transaction });
      data.medicine2 = await MedicineEnumRepository.filterIdInTenant(data.medicine2, { ...this.options, transaction });
      data.medicine3 = await MedicineEnumRepository.filterIdInTenant(data.medicine3, { ...this.options, transaction });
      data.medicine4 = await MedicineEnumRepository.filterIdInTenant(data.medicine4, { ...this.options, transaction });
      data.telemedicineDoctor = await DoctorRepository.filterIdInTenant(data.telemedicineDoctor, { ...this.options, transaction });
      data.med1BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med1BatchDetails, { ...this.options, transaction });
      data.med2BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med2BatchDetails, { ...this.options, transaction });
      data.med3BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med3BatchDetails, { ...this.options, transaction });
      data.med4BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med4BatchDetails, { ...this.options, transaction });

      const record = await PatientVisitRepository.create(data, {
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
        'patientVisit',
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
      data.medicalCenter = await HealthCenterRepository.filterIdInTenant(data.medicalCenter, { ...this.options, transaction });
      data.doctor = await DoctorRepository.filterIdInTenant(data.doctor, { ...this.options, transaction });
      data.symptom1 = await SymptomsEnumRepository.filterIdInTenant(data.symptom1, { ...this.options, transaction });
      data.symptom2 = await SymptomsEnumRepository.filterIdInTenant(data.symptom2, { ...this.options, transaction });
      data.symptom3 = await SymptomsEnumRepository.filterIdInTenant(data.symptom3, { ...this.options, transaction });
      data.medicine1 = await MedicineEnumRepository.filterIdInTenant(data.medicine1, { ...this.options, transaction });
      data.medicine2 = await MedicineEnumRepository.filterIdInTenant(data.medicine2, { ...this.options, transaction });
      data.medicine3 = await MedicineEnumRepository.filterIdInTenant(data.medicine3, { ...this.options, transaction });
      data.medicine4 = await MedicineEnumRepository.filterIdInTenant(data.medicine4, { ...this.options, transaction });
      data.telemedicineDoctor = await DoctorRepository.filterIdInTenant(data.telemedicineDoctor, { ...this.options, transaction });
      data.med1BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med1BatchDetails, { ...this.options, transaction });
      data.med2BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med2BatchDetails, { ...this.options, transaction });
      data.med3BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med3BatchDetails, { ...this.options, transaction });
      data.med4BatchDetails = await SiteInventoryRepository.filterIdInTenant(data.med4BatchDetails, { ...this.options, transaction });

      const record = await PatientVisitRepository.update(
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
        'patientVisit',
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
        await PatientVisitRepository.destroy(id, {
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
    return PatientVisitRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PatientVisitRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PatientVisitRepository.findAndCountAll(
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
    const count = await PatientVisitRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
