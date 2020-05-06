require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "opioid",
    host: "127.0.0.1",
    dialect: "mysql",
    migrationStorageTableName: "sequelize_meta"
  },
  test: {
    username: "root",
    password: null,
    database: "opioid",
    host: "127.0.0.1",
    dialect: "mysql",
    migrationStorageTableName: "sequelize_meta"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "sequelize_meta"
  }
};
