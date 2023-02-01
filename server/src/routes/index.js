const express = require('express');
const router = express.Router();

const response = require('../helpers/response');

const userRouter = require('./user');
const transactionRouter = require('./transactions');

router.get('/', (req, res) => {
  return response.success(res, 200, {
    message: 'Wellcome Kasir Fazz001',
  });
});
router.use('/user', userRouter);
router.use('/transactions', transactionRouter);

module.exports = router;
