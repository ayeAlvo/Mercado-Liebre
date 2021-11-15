const path = require('path');

const maninController = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
  },

  login: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  },

  register: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
  },

  createProduct: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/crear-producto.html'));
  }

}


module.exports = maninController;