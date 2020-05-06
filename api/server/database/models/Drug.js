module.exports = (sequelize, DataTypes) => {
  const Drug = sequelize.define(
    "Drug",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        field: "id"
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "type"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
      },
      comName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "com_name"
      },
      deaSchedule: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        field: "dea_schedule"
      },
      shortTerm: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "short_term"
      },
      longTerm: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "long_term"
      },
      healthIssues: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "health_issues"
      },
      withAlcohol: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "with_alcohol"
      },
      withDrawal: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "with_drawal"
      },
      fdaMedication: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "fda_medication"
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  );

  return Drug;
};
