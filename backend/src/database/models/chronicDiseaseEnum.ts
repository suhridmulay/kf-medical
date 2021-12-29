import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const chronicDiseaseEnum = sequelize.define(
    'chronicDiseaseEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      diseaseName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
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
          fields: ['diseaseName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  chronicDiseaseEnum.associate = (models) => {



    
    models.chronicDiseaseEnum.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.chronicDiseaseEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.chronicDiseaseEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return chronicDiseaseEnum;
}
