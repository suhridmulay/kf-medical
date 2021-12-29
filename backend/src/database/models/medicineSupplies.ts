import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const medicineSupplies = sequelize.define(
    'medicineSupplies',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

  medicineSupplies.associate = (models) => {
    models.medicineSupplies.belongsTo(models.medicineEnum, {
      as: 'medicine',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.medicineSupplies.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicineSupplies.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineSupplies.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineSupplies;
}
