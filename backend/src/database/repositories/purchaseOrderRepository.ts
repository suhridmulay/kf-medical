import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';
import MedicineEnumRepository from './medicineEnumRepository';

const Op = Sequelize.Op;

class PurchaseOrderRepository {

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

    const record = await options.database.purchaseOrder.create(
      {
        ...lodash.pick(data, [
          'purchaseOrderNumber',
          'submittedDate',
          'sumEntriesCost',
          'purchaseOrderLookup',
          'totalGST',
          'freightAmount',
          'discount',
          'writeOffAmount',
          'netAmount',
          'notes',          
          'importHash',
        ]),
        vendorId: data.vendor || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setEntries(data.entries || [], {
      transaction,
    });
    await record.setInvoices(data.invoices || [], {
      transaction,
    });    
  

  
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

    let record = await options.database.purchaseOrder.findOne(      
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
          'purchaseOrderNumber',
          'submittedDate',
          'sumEntriesCost',
          'purchaseOrderLookup',
          'totalGST',
          'freightAmount',
          'discount',
          'writeOffAmount',
          'netAmount',
          'notes',          
          'importHash',
        ]),
        vendorId: data.vendor || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setEntries(data.entries || [], {
      transaction,
    });
    await record.setInvoices(data.invoices || [], {
      transaction,
    });



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

    let record = await options.database.purchaseOrder.findOne(
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
        model: options.database.vendor,
        as: 'vendor',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.purchaseOrder.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        include,
        transaction,
      },
    );
    record.tenantId = currentTenant.name;
    
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

    const records = await options.database.purchaseOrder.findAll(
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

    return options.database.purchaseOrder.count(
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

      if (filter.submittedDateRange) {
        const [start, end] = filter.submittedDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            submittedDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            submittedDate: {
              [Op.lte]: end,
            },
          });
        }
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
    } = await options.database.purchaseOrder.findAndCountAll({
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
              'purchaseOrder',
              'purchaseOrderLookup',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.purchaseOrder.findAll(
      {
        attributes: ['id', 'purchaseOrderLookup'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['purchaseOrderLookup', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.purchaseOrderLookup,
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
        entriesIds: data.entries,
        invoicesIds: data.invoices,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'purchaseOrder',
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

    output.entries = await record.getEntries({
      transaction,
    });

    await Promise.all(output.entries.map(async (entry) => {
      const medicine = await MedicineEnumRepository.findById(entry.medicineId, options);
      entry.medicineId = "Qty " + entry.quantity + " of " + medicine.medicineName + 
                         ". Generic: (" + medicine.genericName + ")";
    }));

    output.invoices = await record.getInvoices({
      transaction,
    });
    return output;
  }
}

export default PurchaseOrderRepository;
