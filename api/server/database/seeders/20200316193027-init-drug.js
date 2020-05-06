"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "drug",
      [
        {
          id: "0093c675-c0bf-4b25-8d84-b68e1078d3fb",
          type: "drug_type",
          com_name: "drug_com_name",
          dea_Schedule: 1,
          created_at: "2017-07-23 13:10:11",
          updated_at: "2017-07-23 13:10:11"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("drug", null, {});
  }
};
