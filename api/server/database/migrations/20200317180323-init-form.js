module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("form", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("form");
  }
};
