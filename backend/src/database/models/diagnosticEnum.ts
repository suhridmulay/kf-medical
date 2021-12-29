import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const diagnosticEnum = sequelize.define(
    'diagnosticEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      diagnosticName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
          notEmpty: true,
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
          fields: ['diagnosticName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  diagnosticEnum.associate = (models) => {



    
    models.diagnosticEnum.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.diagnosticEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.diagnosticEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return diagnosticEnum;
}
