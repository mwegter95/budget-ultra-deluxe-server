'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Category = app.model.define('category',{
    budget_id: INTEGER,
    category_name: STRING,
    category_amount: STRING,
    category_owner_id: INTEGER
  });
  return Category;
};