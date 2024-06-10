// server.js
/*const express = require('express');
const bodyParser = require('body-parser');
//const expensesRouter = require('./routes/route');
//const expenseRoutes = require('./controllers/expenseController'); 
//const expenseRoutes = require('./routes/expenseRoutes');
const expenseRoutes = require('./controllers/transactionController'); 


const app = express();
const port = 5000;

app.use(bodyParser.json());
//app.use('/api', expensesRouter);

// Middleware to parse JSON bodies
// Routes
//app.use('/api', expenseRoutes);
app.use('/api', expenseRoutes);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

// Root endpoint for testing
//app.get('/', (req, res) => {
  //res.send('Hello, welcome to the Expenses API');
//});

// Start the server
//app.listen(6000, () => {
  //console.log(`Server is running on http://localhost:6000`);
//});

module.exports = app;*/
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/router');

const app = express();
app.use(bodyParser.json());
app.use('/api', expenseRoutes);

const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
