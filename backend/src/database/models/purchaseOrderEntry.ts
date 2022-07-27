import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const purchaseOrderEntry = sequelize.define(
    'purchaseOrderEntry',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {

        }
      },
      unitCost: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {

        }
      },
      totalCost: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      stateGST: {
        type: DataTypes.DECIMAL,
      },
      centralGST: {
        type: DataTypes.DECIMAL,
      },
      substitutionAllowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

  purchaseOrderEntry.associate = (models) => {
    models.purchaseOrderEntry.belongsTo(models.purchaseOrder, {
      as: 'purchaseOrder',
      constraints: false,
    });

    models.purchaseOrderEntry.belongsTo(models.medicineEnum, {
      as: 'medicine',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.purchaseOrderEntry.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.purchaseOrderEntry.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.purchaseOrderEntry.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };
  
  return purchaseOrderEntry;
}
