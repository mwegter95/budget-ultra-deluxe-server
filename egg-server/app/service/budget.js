const { Service } = require('egg');

class BudgetService extends Service {
  async getList(query, offset, limit) {
    const { ctx } = this;

    const queryOption = {};
    const paging = {};
    const result = {};

    const hasPaging = offset !== undefined || limit !== undefined;
    if (hasPaging) {
      queryOption.offset = Number(offset) || 0;
      queryOption.limit = Number(limit) || 10;
      paging.offset = queryOption.offset;
      paging.limit = queryOption.limit;

      // 这个名字可配置 待定
      delete query.offset;
      delete query.limit;
    }

    const where = {
      ...query,
      // 自定义查询参数参数
    };

    queryOption.where = where;

    // 其他参数
    // queryOption.order = [['createdAt', 'desc']];

    const res = await ctx.model.Budget.findAll(queryOption);
    result.data = res;

    if (hasPaging) {
      // 获取总数
      const total = await ctx.model.Budget.findAndCountAll({
        where
      });
      if (total) {
        paging.total = total ? total.count : 0;
      }
      result.paging = paging;
    }
    return result;
  }

  async get(id) {
    const { ctx } = this;
    const result = await ctx.model.Budget.findOne({
      where: {
        id,
      }
    });
    return result;
  }

  async edit(data = {}, id) {
    const { ctx } = this;
    ctx.model.Budget.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  async create(data = {}) {
    const { ctx } = this;
    const result = {};
    const res = await ctx.model.Budget.create({
      ...data
    });
    if (res) {
      result.id = res.id;
    }
    return result;
  }

  async update(data = {}, id) {
    const { ctx } = this;
    ctx.model.Budget.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  async destroy(id) {
    const { ctx } = this;
    ctx.model.Budget.destroy({
      where: {
        id,
      }
    });
  }
}

module.exports = BudgetService;