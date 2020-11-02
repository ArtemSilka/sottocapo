// dependencies
const express = require('express');
const app = express();
require('dotenv').config();

// pasring on req bodies
app.use(express.json())

// api routes

// server run
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server running on port', 5000);
});