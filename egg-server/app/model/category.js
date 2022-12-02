'use strict';
const {
  Model
} = require('sequelize');
module.exports = (app, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category.init({
    budget_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    category_amount: DataTypes.STRING,
    category_owner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};