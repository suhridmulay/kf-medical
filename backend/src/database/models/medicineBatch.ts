import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const medicineBatch = sequelize.define(
    'medicineBatch',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      batchNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      expiryDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('expiryDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('expiryDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {

        }
      },
      totalPrice: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      msrp: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      description: {
        type: DataTypes.TEXT,
      },
      purchaseOrderNumber: {
        type: DataTypes.INTEGER,
      },
      medicineBatchLookup: {
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

  medicineBatch.associate = (models) => {
    models.medicineBatch.belongsTo(models.purchaseInvoice, {
      as: 'invoice',
      constraints: false,
    });

    models.medicineBatch.belongsTo(models.medicineEnum, {
      as: 'medicine',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicineBatch.belongsTo(models.vendor, {
      as: 'vendor',
      constraints: false,
    });


    
    models.medicineBatch.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicineBatch.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineBatch.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineBatch;
}
