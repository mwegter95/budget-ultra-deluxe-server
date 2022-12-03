/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // add sequelize config for the Egg app
  config.sequelize =
    {database: "heroku_a574ae5dace3e6d",
    username: "b54f28c51b7b1f",
    password: "c40b497f",
      dialect: "mysql",
      host: "us-cdbr-east-06.cleardb.net",
    };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1669523617538_9189';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    xframe: {
      value: 'SAMEORIGIN'
    },
    domainWhiteList: ['http://localhost:7001']
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
