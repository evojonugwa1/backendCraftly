const express = require('express'); // import express framework
const path = require('path'); // import the path in-built module
const ejs = require ('ejs'); // import the ejs module

//variable for express function
const app = express();

// Express's built-in middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

//Directory for Express
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Craftly is running on port ${PORT}`);
});