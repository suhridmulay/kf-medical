import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const symptomsEnum = sequelize.define(
    'symptomsEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      symptomName: {
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
          fields: ['symptomName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  symptomsEnum.associate = (models) => {



    
    models.symptomsEnum.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.symptomsEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.symptomsEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return symptomsEnum;
}
