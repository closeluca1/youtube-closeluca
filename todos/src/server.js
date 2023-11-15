require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.API_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes.js'));

const server = require('http').Server(app);
const port = process.env.PORT_TYPE;

server.listen(port, () => {
    console.log(`servidor funcionando na porta ${port}`);
});