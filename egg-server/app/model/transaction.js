'use strict';
const {
  Model
} = require('sequelize');
module.exports = (app, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    budget_id: DataTypes.INTEGER,
    transaction_owner: DataTypes.INTEGER,
    income_or_expense: DataTypes.STRING,
    transaction_name: DataTypes.STRING,
    date: DataTypes.DATE,
    category: DataTypes.STRING,
    is_split_cost: DataTypes.STRING,
    split_amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};