import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class PatientVisitRepository {

  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.patientVisit.create(
      {
        ...lodash.pick(data, [
          'visitDate',
          'repeatVisit',
          'otherSymptoms',
          'height',
          'weight',
          'temperature',
          'bloodPressure',
          'pulseRate',
          'oxygenLevel',
          'vitalStatisticsOther',
          'diagnosis',
          'caseSeverity',
          'med1Qty',
          'med1Supplied',
          'med2Qty',
          'med2Supplied',
          'med3Qty',
          'med3Supplied',
          'med4Qty',
          'med4Supplied',
          'medicineInstructions',
          'requestedLabs',
          'dietaryInstructions',
          'isTelemedReferral',
          'medicineCopay',
          'doctorCopay',
          'telemedCopay',
          'referralHospital',
          'referredSpecialistDoctor',
          'returnIn',
          'telemedicineConsultDate',
          'differentialDiagnosis',
          'differentialRecommendation',
          'finalNotes',          
          'importHash',
        ]),
        patientId: data.patient || null,
        medicalCenterId: data.medicalCenter || null,
        doctorId: data.doctor || null,
        symptom1Id: data.symptom1 || null,
        symptom2Id: data.symptom2 || null,
        symptom3Id: data.symptom3 || null,
        medicine1Id: data.medicine1 || null,
        medicine2Id: data.medicine2 || null,
        medicine3Id: data.medicine3 || null,
        medicine4Id: data.medicine4 || null,
        telemedicineDoctorId: data.telemedicineDoctor || null,
        med1BatchDetailsId: data.med1BatchDetails || null,
        med2BatchDetailsId: data.med2BatchDetails || null,
        med3BatchDetailsId: data.med3BatchDetails || null,
        med4BatchDetailsId: data.med4BatchDetails || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    
  

  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );


    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.patientVisit.findOne(      
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'visitDate',
          'repeatVisit',
          'otherSymptoms',
          'height',
          'weight',
          'temperature',
          'bloodPressure',
          'pulseRate',
          'oxygenLevel',
          'vitalStatisticsOther',
          'diagnosis',
          'caseSeverity',
          'med1Qty',
          'med1Supplied',
          'med2Qty',
          'med2Supplied',
          'med3Qty',
          'med3Supplied',
          'med4Qty',
          'med4Supplied',
          'medicineInstructions',
          'requestedLabs',
          'dietaryInstructions',
          'isTelemedReferral',
          'medicineCopay',
          'doctorCopay',
          'telemedCopay',
          'referralHospital',
          'referredSpecialistDoctor',
          'returnIn',
          'telemedicineConsultDate',
          'differentialDiagnosis',
          'differentialRecommendation',
          'finalNotes',          
          'importHash',
        ]),
        patientId: data.patient || null,
        medicalCenterId: data.medicalCenter || null,
        doctorId: data.doctor || null,
        symptom1Id: data.symptom1 || null,
        symptom2Id: data.symptom2 || null,
        symptom3Id: data.symptom3 || null,
        medicine1Id: data.medicine1 || null,
        medicine2Id: data.medicine2 || null,
        medicine3Id: data.medicine3 || null,
        medicine4Id: data.medicine4 || null,
        telemedicineDoctorId: data.telemedicineDoctor || null,
        med1BatchDetailsId: data.med1BatchDetails || null,
        med2BatchDetailsId: data.med2BatchDetails || null,
        med3BatchDetailsId: data.med3BatchDetails || null,
        med4BatchDetailsId: data.med4BatchDetails || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );





    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.patientVisit.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.patient,
        as: 'patient',
      },
      {
        model: options.database.healthCenter,
        as: 'medicalCenter',
      },
      {
        model: options.database.doctor,
        as: 'doctor',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom1',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom2',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine1',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine2',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine4',
      },
      {
        model: options.database.doctor,
        as: 'telemedicineDoctor',
      },
      {
        model: options.database.siteInventory,
        as: 'med1BatchDetails',
      },
      {
        model: options.database.siteInventory,
        as: 'med2BatchDetails',
      },
      {
        model: options.database.siteInventory,
        as: 'med3BatchDetails',
      },
      {
        model: options.database.siteInventory,
        as: 'med4BatchDetails',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.patientVisit.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        include,
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      SequelizeRepository.getCurrentTenant(options);

    const where = {
      id: {
        [Op.in]: ids,
      },
      tenantId: currentTenant.id,
    };

    const records = await options.database.patientVisit.findAll(
      {
        attributes: ['id'],
        where,
      },
    );

    return records.map((record) => record.id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.patientVisit.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
        transaction,
      },
    );
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.patient,
        as: 'patient',
      },
      {
        model: options.database.healthCenter,
        as: 'medicalCenter',
      },
      {
        model: options.database.doctor,
        as: 'doctor',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom1',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom2',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine1',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine2',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine4',
      },
      {
        model: options.database.doctor,
        as: 'telemedicineDoctor',
      },
      {
        model: options.database.siteInventory,
        as: 'med1BatchDetails',
      },
      {
        model: options.database.siteInventory,
        as: 'med2BatchDetails',
      },
      {
        model: options.database.siteInventory,
        as: 'med3BatchDetails',
      },
      {
        model: options.database.siteInventory,
        as: 'med4BatchDetails',
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.patient) {
        whereAnd.push({
          ['patientId']: SequelizeFilterUtils.uuid(
            filter.patient,
          ),
        });
      }

      if (filter.medicalCenter) {
        whereAnd.push({
          ['medicalCenterId']: SequelizeFilterUtils.uuid(
            filter.medicalCenter,
          ),
        });
      }

      if (filter.doctor) {
        whereAnd.push({
          ['doctorId']: SequelizeFilterUtils.uuid(
            filter.doctor,
          ),
        });
      }

      if (filter.visitDateRange) {
        const [start, end] = filter.visitDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            visitDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            visitDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (
        filter.repeatVisit === true ||
        filter.repeatVisit === 'true' ||
        filter.repeatVisit === false ||
        filter.repeatVisit === 'false'
      ) {
        whereAnd.push({
          repeatVisit:
            filter.repeatVisit === true ||
            filter.repeatVisit === 'true',
        });
      }

      if (filter.caseSeverity) {
        whereAnd.push({
          caseSeverity: filter.caseSeverity,
        });
      }

      if (
        filter.isTelemedReferral === true ||
        filter.isTelemedReferral === 'true' ||
        filter.isTelemedReferral === false ||
        filter.isTelemedReferral === 'false'
      ) {
        whereAnd.push({
          isTelemedReferral:
            filter.isTelemedReferral === true ||
            filter.isTelemedReferral === 'true',
        });
      }

      if (filter.telemedicineDoctor) {
        whereAnd.push({
          ['telemedicineDoctorId']: SequelizeFilterUtils.uuid(
            filter.telemedicineDoctor,
          ),
        });
      }

      if (filter.med1BatchDetails) {
        whereAnd.push({
          ['med1BatchDetailsId']: SequelizeFilterUtils.uuid(
            filter.med1BatchDetails,
          ),
        });
      }

      if (filter.med2BatchDetails) {
        whereAnd.push({
          ['med2BatchDetailsId']: SequelizeFilterUtils.uuid(
            filter.med2BatchDetails,
          ),
        });
      }

      if (filter.med3BatchDetails) {
        whereAnd.push({
          ['med3BatchDetailsId']: SequelizeFilterUtils.uuid(
            filter.med3BatchDetails,
          ),
        });
      }

      if (filter.med4BatchDetails) {
        whereAnd.push({
          ['med4BatchDetailsId']: SequelizeFilterUtils.uuid(
            filter.med4BatchDetails,
          ),
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.patientVisit.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [{
      tenantId: tenant.id,
    }];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },

        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.patientVisit.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'patientVisit',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );



    return output;
  }
}

export default PatientVisitRepository;
