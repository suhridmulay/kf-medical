import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const medicineInventory = sequelize.define(
    'medicineInventory',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      inventoryDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('inventoryDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('inventoryDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  medicineInventory.associate = (models) => {
    models.medicineInventory.belongsTo(models.medicineEnum, {
      as: 'medicine',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.medicineInventory.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicineInventory.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineInventory.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineInventory;
}
