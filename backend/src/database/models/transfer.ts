import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const transfer = sequelize.define(
    'transfer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      medicineName: {
        type: DataTypes.TEXT,
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
      transferQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      transferDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('transferDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('transferDate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  transfer.associate = (models) => {
    models.transfer.belongsTo(models.healthCenter, {
      as: 'fromCenter',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.transfer.belongsTo(models.healthCenter, {
      as: 'toCenter',
      constraints: false,
    });

    models.transfer.belongsTo(models.medicineBatch, {
      as: 'medicineBatch',
      constraints: false,
    });


    
    models.transfer.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.transfer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.transfer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return transfer;
}
