module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("drug", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      com_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dea_schedule: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      short_term: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      long_term: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      health_issues: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      with_alcohol: {
        type: Sequelize.STRING,
        allowNull: false
      },
      with_drawal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fda_medication: {
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
    return queryInterface.dropTable("drug");
  }
};
