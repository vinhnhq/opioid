module.exports = (sequelize, DataTypes) => {
  const DrugStreetName = sequelize.define("DrugStreetName", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: "id"
    },
    drugId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "drug_id"
    },
    streetNameId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "street_name_id"
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at"
    }
  });

  return DrugStreetName;
};
