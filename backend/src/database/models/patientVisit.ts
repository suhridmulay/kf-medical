import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const patientVisit = sequelize.define(
    'patientVisit',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      visitDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('visitDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('visitDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      repeatVisit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      otherSymptoms: {
        type: DataTypes.TEXT,
      },
      height: {
        type: DataTypes.STRING(6),
        validate: {
          len: [0, 6],
        }
      },
      weight: {
        type: DataTypes.STRING(6),
        validate: {
          len: [0, 6],
        }
      },
      temperature: {
        type: DataTypes.STRING(5),
        validate: {
          len: [2, 5],
        }
      },
      bloodPressure: {
        type: DataTypes.STRING(8),
        validate: {
          len: [0, 8],
        }
      },
      pulseRate: {
        type: DataTypes.STRING(3),
        validate: {
          len: [2, 3],
        }
      },
      oxygenLevel: {
        type: DataTypes.STRING(3),
        validate: {
          len: [0, 3],
        }
      },
      vitalStatisticsOther: {
        type: DataTypes.TEXT,
      },
      diagnosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      caseSeverity: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Green",
            "Orange",
            "Red"
          ]],
        }
      },
      med1Qty: {
        type: DataTypes.INTEGER,
      },
      med1Supplied: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      med2Qty: {
        type: DataTypes.INTEGER,
      },
      med2Supplied: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      med3Qty: {
        type: DataTypes.INTEGER,
      },
      med3Supplied: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      med4Qty: {
        type: DataTypes.INTEGER,
      },
      med4Supplied: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      medicineInstructions: {
        type: DataTypes.TEXT,
      },
      requestedLabs: {
        type: DataTypes.TEXT,
      },
      dietaryInstructions: {
        type: DataTypes.TEXT,
      },
      requestedLab: {
        type: DataTypes.TEXT,
      },
      referralHospital: {
        type: DataTypes.TEXT,
      },
      referredSpecialistDoctor: {
        type: DataTypes.TEXT,
      },
      returnIn: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1week",
            "2weeks",
            "3weeks",
            "4weeks",
            "6weeks",
            "2months",
            "3months",
            "4months",
            "6months",
            "1year"
          ]],
        }
      },
      telemedicineConsultDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('telemedicineConsultDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('telemedicineConsultDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      differentialDiagnosis: {
        type: DataTypes.TEXT,
      },
      differentialRecommendation: {
        type: DataTypes.TEXT,
      },
      finalNotes: {
        type: DataTypes.TEXT,
      },
      patientCopay: {
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  patientVisit.associate = (models) => {
    models.patientVisit.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.patientVisit.belongsTo(models.healthCenter, {
      as: 'medicalCenter',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.patientVisit.belongsTo(models.doctor, {
      as: 'doctor',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.patientVisit.belongsTo(models.symptomsEnum, {
      as: 'symptom1',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.patientVisit.belongsTo(models.symptomsEnum, {
      as: 'symptom2',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.symptomsEnum, {
      as: 'symptom3',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine1',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine2',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine3',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine4',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.doctor, {
      as: 'telemedicineDoctor',
      constraints: false,
    });


    
    models.patientVisit.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.patientVisit.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.patientVisit.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return patientVisit;
}
