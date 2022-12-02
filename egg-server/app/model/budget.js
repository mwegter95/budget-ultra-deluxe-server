'use strict';
const { 
  Model
} = require('sequelize');
module.exports = (app, DataTypes) => {
  class budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  budget.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    co_owner_id: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'budget',
  });
  return budget;
};