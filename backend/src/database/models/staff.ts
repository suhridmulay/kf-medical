import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const staff = sequelize.define(
    'staff',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
          notEmpty: true,
        }
      },
      mobileNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
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
          fields: ['name', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['userId', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  staff.associate = (models) => {
    models.staff.belongsTo(models.user, {
      as: 'user',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.staff.belongsTo(models.healthCenter, {
      as: 'center',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.staff.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.staff.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.staff.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return staff;
}
