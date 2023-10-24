const path = require('path');

const express = require('express');


const adminController = require('../controllers/admin');

const router = express.Router();
router.get('/expenses',adminController.getExpenses);

router.post('/add-expense',adminController.PostExpense);


router.post('/delete-expense',adminController.deleteExpense)

module.exports = router;