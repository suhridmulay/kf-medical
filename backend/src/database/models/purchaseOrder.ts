import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const purchaseOrder = sequelize.define(
    'purchaseOrder',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      purchaseOrderNumber: {
        type: DataTypes.INTEGER,
      },
      submittedDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('submittedDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('submittedDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      sumEntriesCost: {
        type: DataTypes.DECIMAL,
      },
      purchaseOrderLookup: {
        type: DataTypes.STRING(255),
        validate: {
          len: [5, 255],
        }
      },
      totalGST: {
        type: DataTypes.DECIMAL,
      },
      freightAmount: {
        type: DataTypes.DECIMAL,
      },
      discount: {
        type: DataTypes.DECIMAL,
      },
      writeOffAmount: {
        type: DataTypes.DECIMAL,
      },
      netAmount: {
        type: DataTypes.DECIMAL,
      },
      notes: {
        type: DataTypes.STRING(255),
        validate: {
          len: [0, 255],
        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['purchaseOrderLookup', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  purchaseOrder.associate = (models) => {
    models.purchaseOrder.belongsTo(models.vendor, {
      as: 'vendor',
      constraints: false,
    });

    models.purchaseOrder.hasMany(models.purchaseOrderEntry, {
      as: 'entries',
      constraints: false,
      foreignKey: 'purchaseOrderId',
    });

    models.purchaseOrder.hasMany(models.purchaseInvoice, {
      as: 'invoices',
      constraints: false,
      foreignKey: 'purchaseOrderId',
    });


    
    models.purchaseOrder.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.purchaseOrder.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.purchaseOrder.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return purchaseOrder;
}
