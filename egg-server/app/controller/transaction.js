const { Controller } = require('egg');

class TransactionController extends Controller {
  /**
   * GET /api/transaction
   */
  async index() {
    const { ctx } = this;

    const response = {};
    try {
      // 分页
      const result = await ctx.service.transaction.getList(ctx.query, ctx.query.offset, ctx.query.limit);
      response.data = result.data;
      result.paging && (response.paging = result.paging);
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }

    ctx.body = response;
  }

  /**
   * GET /api/transaction/:id
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      const result = await ctx.service.transaction.get(id);
      response.data = result;
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }

  /**
   * GET /api/transaction/:id/edit
   */
  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.transaction.edit(ctx.query, id);
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }

  /**
   * POST /api/transaction
   */
  async create() {
    const { ctx } = this;

    const response = {};
    try {
      const res = await ctx.service.transaction.create(ctx.request.body);
      response.data = res;
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }

  /**
   * PUT /api/transaction/:id
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.transaction.update(ctx.request.body, id);
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }

  /**
   * DELETE /api/transaction/:id
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.transaction.destroy(id);
      response.success = true;
    } catch (err) {
      response.error = {
        message: err,
      };
      response.success = false;
    }
    ctx.body = response;
  }
}

module.exports = TransactionController;
  