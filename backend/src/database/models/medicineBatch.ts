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
      unit: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "Tablets",
            "Strips",
            "Bottle",
            "Tube",
            "Drop"
          ]],
        }
      },
      qtyInStrips: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      batchNumber: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
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
        validate: {

        }
      },
      totalPrice: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      stateGST: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      centralGST: {
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
        type: DataTypes.STRING(255),
        validate: {
          len: [0, 255],
        }
      },
      medicineBatchLookup: {
        type: DataTypes.STRING(255),
        validate: {
          len: [5, 255],
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
          fields: ['medicineBatchLookup', 'tenantId'],
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
