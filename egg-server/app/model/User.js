'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.sequelize;
  const User = app.model.define('user', 
    {
      first_name: DataTypes.STRING(30),
      last_name: DataTypes.STRING(30),
      budgets: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue("value"));
        },
        set: function (value) {
          this.setDataValue("value", JSON.stringify(value));
        },
      },
      email: DataTypes.STRING(100),
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "budget",
    }
  );
  return budget;
};