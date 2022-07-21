import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const healthCenter = sequelize.define(
    'healthCenter',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      phoneNumber: {
        type: DataTypes.TEXT,
      },
      warehouseLicenceNumber: {
        type: DataTypes.STRING(255),
        validate: {
          len: [0, 255],
        }
      },
      isHeadoffice: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

  healthCenter.associate = (models) => {
    models.healthCenter.belongsTo(models.user, {
      as: 'adminName',
      constraints: false,
    });


    
    models.healthCenter.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.healthCenter.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.healthCenter.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return healthCenter;
}
