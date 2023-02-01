const db = require('../config/db');

const listUsers = () => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT * FROM users`;
    db.query(sqlQuery, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const userById = (id) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT * FROM users WHERE id = ${id}`;

    db.query(sqlQuery, (err, result) => {
      if (err && err.code === 'ER_BAD_FIELD_ERROR')
        reject({ status: 400, error: 'User Not Found!' });
      if (err) reject({ status: 500, error: err });
      resolve(result);
    });
  });
};

module.exports = {
  listUsers,
  userById,
};
