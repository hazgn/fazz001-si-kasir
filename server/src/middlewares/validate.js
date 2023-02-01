const response = require('../helpers/response');

const transaction = (req, res, next) => {
  const { body } = req;
  const transactionBody = ['price'];
  const bodyProperty = Object.keys(body);
  const isBodyValid =
    transactionBody.filter((property) => !bodyProperty.includes(property))
      .length == 0
      ? true
      : false;
  if (!isBodyValid) return response.error(res, 400, 'Invalid Body');
  next();
};

module.exports = {
  transaction,
};
