module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("drug_therapy", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      drug_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      therapy_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("drug_therapy");
  }
};
