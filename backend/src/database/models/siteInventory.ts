import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const siteInventory = sequelize.define(
    'siteInventory',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      siteBatchIdentifier: {
        type: DataTypes.TEXT,
      },
      inventoryAddDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('inventoryAddDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('inventoryAddDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
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
      },
      initialcount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      currentCount: {
        type: DataTypes.INTEGER,
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

  siteInventory.associate = (models) => {
    models.siteInventory.belongsTo(models.healthCenter, {
      as: 'center',
      constraints: false,
    });

    models.siteInventory.belongsTo(models.medicineBatch, {
      as: 'batchNumber',
      constraints: false,
    });

    models.siteInventory.belongsTo(models.medicineEnum, {
      as: 'medicine',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.siteInventory.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.siteInventory.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.siteInventory.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return siteInventory;
}
