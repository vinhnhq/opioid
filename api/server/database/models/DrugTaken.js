module.exports = (sequelize, DataTypes) => {
  const DrugTaken = sequelize.define("DrugTaken", {
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
    takenId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "taken_id"
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

  return DrugTaken;
};
