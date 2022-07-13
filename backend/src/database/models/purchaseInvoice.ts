import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const purchaseInvoice = sequelize.define(
    'purchaseInvoice',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      invoiceNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      invoiceAmount: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {

        }
      },
      invoiceTax: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      invoiceTotal: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {

        }
      },
      invoiceDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('invoiceDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('invoiceDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      invoicePaidDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('invoicePaidDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('invoicePaidDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      paymentDetails: {
        type: DataTypes.TEXT,
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  purchaseInvoice.associate = (models) => {
    models.purchaseInvoice.belongsTo(models.purchaseOrder, {
      as: 'purchaseOrder',
      constraints: false,
    });

    models.purchaseInvoice.hasMany(models.medicineBatch, {
      as: 'batches',
      constraints: false,
      foreignKey: 'invoiceId',
    });


    
    models.purchaseInvoice.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.purchaseInvoice.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.purchaseInvoice.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return purchaseInvoice;
}
