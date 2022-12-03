'use strict';

module.exports = app => {
  const { STRING, DATE, TEXT } = app.Sequelize;
  const User = app.model.define('user', 
    {
      first_name: STRING(30),
      last_name: STRING(30),
      budgets: {
        type: TEXT,
        get: function () {
          if (this.getDataValue("value") !== undefined) {
            try {
              return JSON.parse(this.getDataValue("value"));
            } catch(error) {
              throw new Error(error)
            };
          }
        },
        set: function (value) {
          this.setDataValue("value", JSON.stringify(value));
        },
      },
      email: STRING(100),
      created_at: DATE,
      updated_at: DATE,
    });

  return User;
};