import { DataTypes, Sequelize } from 'sequelize';

interface MedicineCategoryEnum {
  id: string;
  categoryName: string;
  importHash: string;
}

export default function (sequelize: Sequelize) {
  const medicineCategoryEnum = sequelize.define(
    'medicineCategoryEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      categoryName: {
        type: DataTypes.STRING(128),
        validate: {
          len: [3, 128],
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
          fields: ['categoryName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  medicineCategoryEnum.associate = (models) => {



    
    models.medicineCategoryEnum.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicineCategoryEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineCategoryEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineCategoryEnum;
}
