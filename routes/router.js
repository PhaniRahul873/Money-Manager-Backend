// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/transcationController');

// Update expense
router.put('/expenses/:userId/:timestamp', expenseController.updateExpense);
router.delete('/expenses/:userId/:timestamp', expenseController.deleteExpense);

module.exports = router;
