import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const visitTickets = sequelize.define(
    'visitTickets',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      department: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "General",
            "Homeopathy",
            "Dental",
            "Eye"
          ]],
        }
      },
      ticketCount: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
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

  visitTickets.associate = (models) => {
    models.visitTickets.belongsTo(models.patientVisit, {
      as: 'patientVisit',
      constraints: false,
    });


    
    models.visitTickets.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.visitTickets.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.visitTickets.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return visitTickets;
}
