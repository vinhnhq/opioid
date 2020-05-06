module.exports = (sequelize, DataTypes) => {
  const DrugTherapy = sequelize.define("DrugTherapy", {
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
    therapyId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "therapy_id"
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

  return DrugTherapy;
};
