const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './project-files/')));
app.listen('8080', () => console.log('Listening on port 8080'));
