const response = require('../helpers/response');
const transactionModel = require('../models/transactions');
const usersModel = require('../models/users');
const totalPrice = require('../helpers/totalPrice');

const transactionsListController = async (req, res) => {
  try {
    const users = await usersModel.listUsers();
    const transactins = await transactionModel.listTransaction();

    let result = [];

    users.forEach((data) => {
      result = [
        ...result,
        {
          id: data.id,
          name: data.name,
          total: totalPrice(data.id, transactins),
        },
      ];
    });

    return response.success(res, 200, result);
  } catch (error) {
    return response.error(res, 500, error);
  }
};

const transactionByUserIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await transactionModel.transactionByUserId(id);

    let transactions = [];

    result.forEach((data) => {
      transactions = [
        ...transactions,
        {
          id: data.id,
          userId: data.userId,
          total: data.total,
          date: data.date,
        },
      ];
    });

    return response.success(res, 200, {
      id: result[0].userId,
      name: result[0].name,
      transactions,
    });
  } catch ({ status, error }) {
    return response.error(res, status, error);
  }
};

const transactionInsertController = async (req, res) => {
  const { params, body } = req;
  const { id } = params;
  const numberPatern = /^[0-9]*$/;
  try {
    const checkUserById = await usersModel.userById(id);

    if (checkUserById.length <= 0)
      return response.error(res, 400, 'user not found!');

    if (!numberPatern.test(body.price))
      return response.error(res, 400, 'Price Must be Number');

    await transactionModel.transactionInsert(id, body);

    return response.success(res, 200, {
      message: 'Success Add New Transactions',
      data: {
        id: checkUserById[0].id,
        name: checkUserById[0].name,
        total: parseInt(body.price),
      },
    });
  } catch ({ status, error }) {
    return response.error(res, status, error);
  }
};

module.exports = {
  transactionsListController,
  transactionByUserIdController,
  transactionInsertController,
};
