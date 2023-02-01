const totalPrice = (idUser, transactions) => {
  let resultPrice = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (idUser === transactions[i].userId) {
      resultPrice = resultPrice + transactions[i].total;
    }
  }
  return resultPrice;
};

module.exports = totalPrice;
