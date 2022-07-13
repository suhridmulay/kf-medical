import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class MedicineBatchRepository {

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

    const record = await options.database.medicineBatch.create(
      {
        ...lodash.pick(data, [
          'quantity',
          'batchNumber',
          'expiryDate',
          'unitPrice',
          'totalPrice',
          'msrp',
          'description',
          'purchaseOrderNumber',
          'medicineBatchLookup',          
          'importHash',
        ]),
        invoiceId: data.invoice || null,
        medicineId: data.medicine || null,
        vendorId: data.vendor || null,
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

    let record = await options.database.medicineBatch.findOne(      
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
          'quantity',
          'batchNumber',
          'expiryDate',
          'unitPrice',
          'totalPrice',
          'msrp',
          'description',
          'purchaseOrderNumber',
          'medicineBatchLookup',          
          'importHash',
        ]),
        invoiceId: data.invoice || null,
        medicineId: data.medicine || null,
        vendorId: data.vendor || null,
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

    let record = await options.database.medicineBatch.findOne(
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
        model: options.database.purchaseInvoice,
        as: 'invoice',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine',
      },
      {
        model: options.database.vendor,
        as: 'vendor',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.medicineBatch.findOne(
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

    const records = await options.database.medicineBatch.findAll(
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

    return options.database.medicineBatch.count(
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
        model: options.database.purchaseInvoice,
        as: 'invoice',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine',
      },
      {
        model: options.database.vendor,
        as: 'vendor',
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

      if (filter.invoice) {
        whereAnd.push({
          ['invoiceId']: SequelizeFilterUtils.uuid(
            filter.invoice,
          ),
        });
      }

      if (filter.medicine) {
        whereAnd.push({
          ['medicineId']: SequelizeFilterUtils.uuid(
            filter.medicine,
          ),
        });
      }

      if (filter.quantityRange) {
        const [start, end] = filter.quantityRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            quantity: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            quantity: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.batchNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'medicineBatch',
            'batchNumber',
            filter.batchNumber,
          ),
        );
      }

      if (filter.expiryDateRange) {
        const [start, end] = filter.expiryDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            expiryDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            expiryDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.unitPriceRange) {
        const [start, end] = filter.unitPriceRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            unitPrice: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            unitPrice: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.totalPriceRange) {
        const [start, end] = filter.totalPriceRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            totalPrice: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            totalPrice: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.msrpRange) {
        const [start, end] = filter.msrpRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            msrp: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            msrp: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.purchaseOrderNumberRange) {
        const [start, end] = filter.purchaseOrderNumberRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            purchaseOrderNumber: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            purchaseOrderNumber: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.vendor) {
        whereAnd.push({
          ['vendorId']: SequelizeFilterUtils.uuid(
            filter.vendor,
          ),
        });
      }

      if (filter.medicineBatchLookup) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'medicineBatch',
            'medicineBatchLookup',
            filter.medicineBatchLookup,
          ),
        );
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
    } = await options.database.medicineBatch.findAndCountAll({
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
          {
            [Op.and]: SequelizeFilterUtils.ilikeIncludes(
              'medicineBatch',
              'medicineBatchLookup',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.medicineBatch.findAll(
      {
        attributes: ['id', 'medicineBatchLookup'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['medicineBatchLookup', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.medicineBatchLookup,
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
        entityName: 'medicineBatch',
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

export default MedicineBatchRepository;
