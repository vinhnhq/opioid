module.exports = (sequelize, DataTypes) => {
  const DrugForm = sequelize.define("DrugForm", {
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
    formId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "form_id"
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

  return DrugForm;
};
