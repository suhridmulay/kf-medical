import { DataTypes } from 'sequelize';import moment from 'moment';
import StringUtils from '../utils/stringUtils';

export default function (sequelize) {
  const patient = sequelize.define(
    'patient',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      registrationNumber: {
        type: DataTypes.STRING(12),
        validate: {
          len: [6, 12],
        }
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

  patient.beforeCreate((patient, options) => {
    patient.firstName  = StringUtils.trimString(patient.firstName);
    patient.middleName = StringUtils.trimString(patient.middleName);
    patient.lastName   = StringUtils.trimString(patient.lastName);

    patient.fullName = StringUtils.buildFullName(
      patient.firstName,
      patient.middleName,
      patient.lastName
    );
  });

  patient.beforeUpdate((patient, options) => {
    patient.firstName  = StringUtils.trimString(patient.firstName);
    patient.middleName = StringUtils.trimString(patient.middleName);
    patient.lastName   = StringUtils.trimString(patient.lastName);

    patient.fullName = StringUtils.buildFullName(
      patient.firstName,
      patient.middleName,
      patient.lastName
    );
  });

  return patient;
}
