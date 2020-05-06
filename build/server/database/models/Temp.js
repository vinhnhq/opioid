"use strict";

module.exports = function (sequelize, DataTypes) {
  var Drug = sequelize.define("Drug", {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      field: "id"
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "type"
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name"
    },
    ComName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "com_name"
    },
    DeaSchedule: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      field: "dea_schedule"
    },
    ShortTerm: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "short_term"
    },
    LongTerm: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "long_term"
    },
    HealthIssues: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "health_issues"
    },
    WithAlcohol: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "with_alcohol"
    },
    WithDrawal: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "with_drawal"
    },
    FdaMedication: {
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
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  });
  return Drug;
};
//# sourceMappingURL=Temp.js.map