import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const vendor = sequelize.define(
    'vendor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      vendorName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [0, 255],
          notEmpty: true,
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      gstNumber: {
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
        {
          unique: true,
          fields: ['vendorName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['phone', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['email', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  vendor.associate = (models) => {



    
    models.vendor.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.vendor.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.vendor.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return vendor;
}
