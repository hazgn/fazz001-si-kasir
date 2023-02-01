const response = require('../helpers/response');
const usersModel = require('../models/users');

const userListController = async (req, res) => {
  try {
    const result = await usersModel.listUsers();

    return response.success(res, 200, result);
  } catch (error) {
    return response.error(res, 500, error);
  }
};

module.exports = {
  userListController,
};
