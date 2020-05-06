"use strict";

module.exports = function (sequelize, DataTypes) {
  var Drug = sequelize.define("Drug", {
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
//# sourceMappingURL=Drug.js.map