'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Budget = app.model.define('budget', {
    title: STRING,
    co_owner_id: INTEGER,
    year: INTEGER,
    month: INTEGER
  });

  Budget.associate = function() {
    app.model.Budget.belongsTo(app.model.User, { as: 'owner_id', foreignKey: 'id'});
  };

  return Budget;
};