import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const prescriptionFill = sequelize.define(
    'prescriptionFill',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  prescriptionFill.associate = (models) => {
    models.prescriptionFill.belongsTo(models.patientVisit, {
      as: 'patientVisit',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.prescriptionFill.belongsTo(models.siteInventory, {
      as: 'siteInventory',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.prescriptionFill.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.prescriptionFill.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.prescriptionFill.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return prescriptionFill;
}
