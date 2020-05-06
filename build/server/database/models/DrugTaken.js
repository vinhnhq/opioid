"use strict";

module.exports = function (sequelize, DataTypes) {
  var DrugTaken = sequelize.define("drug_taken", {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      field: "id"
    },
    name: {
      type: DataTypes.STRING
    }
  });
  return DrugTaken;
};
//# sourceMappingURL=DrugTaken.js.map