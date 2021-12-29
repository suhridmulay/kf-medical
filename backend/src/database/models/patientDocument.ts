import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const patientDocument = sequelize.define(
    'patientDocument',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      reportName: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          len: [0, 200],
          notEmpty: true,
        }
      },
      reportDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('reportDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('reportDate'))
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

  patientDocument.associate = (models) => {
    models.patientDocument.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
    });

    models.patientDocument.hasMany(models.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.patientDocument.getTableName(),
        belongsToColumn: 'image',
      },
    });
    
    models.patientDocument.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.patientDocument.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.patientDocument.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return patientDocument;
}
