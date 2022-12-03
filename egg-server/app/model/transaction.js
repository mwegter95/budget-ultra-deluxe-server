'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Transaction = app.model.define('transaction', {
    budget_id: INTEGER,
    transaction_owner: INTEGER,
    income_or_expense: STRING,
    transaction_name: STRING,
    date: DATE,
    category: STRING,
    is_split_cost: STRING,
    split_amount: STRING
  });

  return Transaction;
};