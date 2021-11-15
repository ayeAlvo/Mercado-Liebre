const express = require('express');
const path = require('path');
const rutasMain = require('./routers/main.js');

const app = express();

app.listen(process.env.PORT || 8000);

app.use(express.static(__dirname + '/public'));

app.use('/', rutasMain);
