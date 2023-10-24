const Expense = require("../models/expense");

exports.getExpenses = (req, res, next) => {
  Expense.findAll().then((expenses) => {
    res.json(expenses);
  });
};

exports.PostExpense = (req, res, next) => {
  const expense = req.body.expense;
  const description = req.body.description;
  const amount = req.body.amount;
  Expense.create({
    expense: expense,
    description: description,
    amount: amount,
  })
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => console.log(err));
};

exports.deleteExpense = (req, res, next) => {
  // console.log(req.body);
  Expense.findByPk(req.body.id)
    .then((expense) => {
      return expense.destroy();
    })
    .then((expense) => {
        console.log(expense);
      res.json(req.body.id);
    })
    .catch((err) => console.log(res));
};
