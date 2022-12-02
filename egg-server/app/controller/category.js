const { Controller } = require('egg');

class CategoryController extends Controller {
  /**
   * GET /api/category
   */
  async index() {
    const { ctx } = this;

    const response = {};
    try {
      // 分页
      const result = await ctx.service.category.getList(ctx.query, ctx.query.offset, ctx.query.limit);
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
   * GET /api/category/:id
   */
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      const result = await ctx.service.category.get(id);
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
   * GET /api/category/:id/edit
   */
  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.category.edit(ctx.query, id);
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
   * POST /api/category
   */
  async create() {
    const { ctx } = this;

    const response = {};
    try {
      const res = await ctx.service.category.create(ctx.request.body);
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
   * PUT /api/category/:id
   */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.category.update(ctx.request.body, id);
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
   * DELETE /api/category/:id
   */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;

    const response = {};
    try {
      await ctx.service.category.destroy(id);
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

module.exports = CategoryController;
  