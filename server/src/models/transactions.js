const db = require('../config/db');

const listTransaction = () => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT t.id, t.userId, u.name AS 'name', t.total FROM transactions t JOIN users u On t.userId = u.id`;
    db.query(sqlQuery, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const transactionByUserId = (id) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT t.id, t.userId, u.name AS 'name',  t.total, t.date FROM transactions t JOIN users u On t.userId = u.id WHERE t.userId = ${id}`;
    db.query(sqlQuery, (err, result) => {
      if (err) return reject({ status: 500, error: err });
      if (Array.isArray(result) && result.length <= 0)
        reject({ status: 400, error: 'User Not Found!' });

      resolve(result);
    });
  });
};

const transactionInsert = (id, body) => {
  const { price } = body;
  return new Promise((resolve, reject) => {
    const date = new Date();

    const sendBody = {
      userId: id,
      total: price,
      date,
    };

    const sqlQuery = `INSERT INTO transactions SET ?`;
    db.query(sqlQuery, sendBody, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  listTransaction,
  transactionByUserId,
  transactionInsert,
};
