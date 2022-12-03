'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources("users", "/api/users", controller.user);
  router.resources("budget", "/api/budgets", controller.budget);
  router.resources("category", "/api/categorys", controller.category);
  router.resources("transaction", "/api/transactions", controller.transaction);
};
