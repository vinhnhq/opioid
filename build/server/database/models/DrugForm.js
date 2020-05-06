"use strict";

module.exports = function (sequelize, DataTypes) {
  var DrugForm = sequelize.define("drug_form", {
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
  return DrugForm;
};
//# sourceMappingURL=DrugForm.js.map