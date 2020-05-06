"use strict";

module.exports = function (sequelize, DataTypes) {
  var DrugTherapy = sequelize.define("drug_therapy", {
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
  return DrugTherapy;
};
//# sourceMappingURL=DrugTherapy.js.map