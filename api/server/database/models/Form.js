module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define("Form", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: "id"
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "code"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "description"
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

  return Form;
};
