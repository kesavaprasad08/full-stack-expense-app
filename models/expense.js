const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Expense = sequelize.define("Expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  expense: Sequelize.STRING,
  description: Sequelize.STRING,
  amount: Sequelize.INTEGER,
});

module.exports = Expense;
