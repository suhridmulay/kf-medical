import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const medicalHistory = sequelize.define(
    'medicalHistory',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      smoking: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "None",
            "Cigarette",
            "Bidi",
            "Ganja",
            "Multiple",
            "Other"
          ]],
        }
      },
      drugUse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      drink: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Occasionally",
            "Frequently",
            "Daily"
          ]],
        }
      },
      familyHistory: {
        type: DataTypes.TEXT,
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

  medicalHistory.associate = (models) => {
    models.medicalHistory.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease1',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease2',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease3',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease4',
      constraints: false,
    });


    
    models.medicalHistory.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.medicalHistory.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicalHistory.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicalHistory;
}
