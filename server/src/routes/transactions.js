const express = require('express');
const transactionRouter = express.Router();
const transactionController = require('../controllers/transactions');
const validate = require('../middlewares/validate');

transactionRouter.get('/', transactionController.transactionsListController);
transactionRouter.get(
  '/:id',
  transactionController.transactionByUserIdController
);
transactionRouter.post(
  '/:id',
  validate.transaction,
  transactionController.transactionInsertController
);

module.exports = transactionRouter;
