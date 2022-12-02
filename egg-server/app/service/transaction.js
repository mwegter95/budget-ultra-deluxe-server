const { Service } = require('egg');

class TransactionService extends Service {
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

    const res = await ctx.model.Transaction.findAll(queryOption);
    result.data = res;

    if (hasPaging) {
      // 获取总数
      const total = await ctx.model.Transaction.findAndCountAll({
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
    const result = await ctx.model.Transaction.findOne({
      where: {
        id,
      }
    });
    return result;
  }

  async edit(data = {}, id) {
    const { ctx } = this;
    ctx.model.Transaction.update({
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
    const res = await ctx.model.Transaction.create({
      ...data
    });
    if (res) {
      result.id = res.id;
    }
    return result;
  }

  async update(data = {}, id) {
    const { ctx } = this;
    ctx.model.Transaction.update({
      ...data
    }, {
      where: {
        id,
      }
    });
  }

  async destroy(id) {
    const { ctx } = this;
    ctx.model.Transaction.destroy({
      where: {
        id,
      }
    });
  }
}

module.exports = TransactionService;