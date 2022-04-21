import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const patient = sequelize.define(
    'patient',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
          notEmpty: true,
        }
      },
      middleName: {
        type: DataTypes.TEXT,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
          notEmpty: true,
        }
      },
      fullName: {
        type: DataTypes.STRING(255),
        validate: {
          len: [2, 255],
        }
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "Male",
            "Female"
          ]],
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      localityName: {
        type: DataTypes.TEXT,
      },
      mobileNumber: {
        type: DataTypes.TEXT,
      },
      aadharNumber: {
        type: DataTypes.TEXT,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateOfBirth')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateOfBirth'))
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

  patient.associate = (models) => {
    models.patient.belongsTo(models.healthCenter, {
      as: 'medicalCenter',
      constraints: false,
    });

    models.patient.belongsTo(models.medicalHistory, {
      as: 'medicalHistory',
      constraints: false,
    });

    models.patient.hasMany(models.patientVisit, {
      as: 'medicalVisits',
      constraints: false,
      foreignKey: 'patientId',
    });

    models.patient.hasMany(models.patientDocument, {
      as: 'medicalDocuments',
      constraints: false,
      foreignKey: 'patientId',
    });

    models.patient.hasMany(models.file, {
      as: 'picture',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.patient.getTableName(),
        belongsToColumn: 'picture',
      },
    });
    
    models.patient.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.patient.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.patient.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return patient;
}
