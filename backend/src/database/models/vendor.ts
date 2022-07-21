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
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [0, 255],
          notEmpty: true,
        }
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          len: [10, 20],
          notEmpty: true,
        }
      },
      fax: {
        type: DataTypes.STRING(20),
        validate: {
          len: [10, 20],
        }
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [0, 255],
          notEmpty: true,
        }
      },
      tin: {
        type: DataTypes.STRING(15),
        validate: {
          len: [0, 15],
        }
      },
      dlNumber: {
        type: DataTypes.STRING(100),
        validate: {
          len: [0, 100],
        }
      },
      gstNumber: {
        type: DataTypes.STRING(20),
        validate: {
          len: [0, 20],
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
