import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class SiteInventoryRepository {

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

    const record = await options.database.siteInventory.create(
      {
        ...lodash.pick(data, [
          'siteBatchIdentifier',
          'inventoryAddDate',
          'expiryDate',
          'initialCount',
          'currentCount',          
          'importHash',
        ]),
        centerId: data.center || null,
        batchNumberId: data.batchNumber || null,
        medicineId: data.medicine || null,
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

    let record = await options.database.siteInventory.findOne(      
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
          'siteBatchIdentifier',
          'inventoryAddDate',
          'expiryDate',
          'initialCount',
          'currentCount',          
          'importHash',
        ]),
        centerId: data.center || null,
        batchNumberId: data.batchNumber || null,
        medicineId: data.medicine || null,
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

    let record = await options.database.siteInventory.findOne(
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
        model: options.database.healthCenter,
        as: 'center',
      },
      {
        model: options.database.medicineBatch,
        as: 'batchNumber',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.siteInventory.findOne(
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

    const records = await options.database.siteInventory.findAll(
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

    return options.database.siteInventory.count(
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
        model: options.database.healthCenter,
        as: 'center',
      },
      {
        model: options.database.medicineBatch,
        as: 'batchNumber',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine',
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
 
   if (filter.hasRemainingMeds) {
        whereAnd.push({
          ['currentCount']: {
            [Op.gt]: 0,
          },
        });
      }

      if (filter.center) {
        whereAnd.push({
          ['centerId']: SequelizeFilterUtils.uuid(
            filter.center,
          ),
        });
      }

      if (filter.batchNumber) {
        whereAnd.push({
          ['batchNumberId']: SequelizeFilterUtils.uuid(
            filter.batchNumber,
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

      if (filter.inventoryAddDateRange) {
        const [start, end] = filter.inventoryAddDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            inventoryAddDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            inventoryAddDate: {
              [Op.lte]: end,
            },
          });
        }
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
    } = await options.database.siteInventory.findAndCountAll({
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
              'siteInventory',
              'siteBatchIdentifier',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.siteInventory.findAll(
      {
        attributes: ['id', 'siteBatchIdentifier'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['siteBatchIdentifier', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.siteBatchIdentifier,
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
        entityName: 'siteInventory',
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

export default SiteInventoryRepository;
