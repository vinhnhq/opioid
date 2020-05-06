"use strict";

module.exports = function (sequelize, DataTypes) {
  var StreetName = sequelize.define("street_name", {
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
  return StreetName;
};
//# sourceMappingURL=StreetName.js.map