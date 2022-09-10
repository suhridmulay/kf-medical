import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const medicineEnum = sequelize.define(
    'medicineEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      medicineName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
          notEmpty: true,
        }
      },
      keptInStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isCommon: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      genericName: {
        type: DataTypes.TEXT,
      },
      compositionName: {
        type: DataTypes.TEXT,
      },
      msrp: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      centralGST: {
        type: DataTypes.DECIMAL,
      },
      stateGST: {
        type: DataTypes.DECIMAL,
      },
      unit: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "STRIP",
            "BOTTLE",
            "DROP",
            "TUBE"
          ]],
        }
      },
      tabletsPerStrip: {
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
        {
          unique: true,
          fields: ['medicineName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  medicineEnum.associate = (models) => {
    models.medicineEnum.belongsTo(models.medicineCategoryEnum, {
      as: 'medicineCategory',
      constraints: false,
    });


    
    models.medicineEnum.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicineEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineEnum;
}
