const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("Iniciando API!")

require('./app/controllers/authController')(app);
require('./app/controllers/sessionController')(app);

app.listen(3000);
