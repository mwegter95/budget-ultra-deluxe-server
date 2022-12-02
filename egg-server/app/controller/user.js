const { Controller } = require('egg');

class UserController extends Controller {
  /**
   * GET /api/user
   */
  async index() {
    const { ctx } = this;

    const response = {};
    try {
      // 分页
      const result = await ctx.service.user.getList(ctx.query, ctx.query.offset, ctx.query.limit);
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
   * GET /api/user/:id
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      const result = await ctx.service.user.get(id);
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
   * GET /api/user/:id/edit
   */
  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.user.edit(ctx.query, id);
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
   * POST /api/user
   */
  async create() {
    const { ctx } = this;

    const response = {};
    try {
      const res = await ctx.service.user.create(ctx.request.body);
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
   * PUT /api/user/:id
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.user.update(ctx.request.body, id);
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
   * DELETE /api/user/:id
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.user.destroy(id);
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

module.exports = UserController;
  