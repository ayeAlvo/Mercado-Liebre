const express = require('express');
const path = require('path');

const app = express();

app.listen(8000, () =>
 console.log('Servidor corriendo en puerto 8000')
);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
   });

app.get('/crear-producto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/crear-producto.html'));
   });   

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
