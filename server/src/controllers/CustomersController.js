const {Customers} = require('../models');

module.exports = {
  index (req, res) {
    try {
      Customers.all().then(list => {
        res.send(list);
      });
    } catch (error) {
      res.status(500).send({
        error: 'Greska prilikom slanja liste klijenata'
      });
    }
  },
  post (req, res) {
    try {
      console.log(req.file);
      /*
      Customers.create(req.body).then(customer => {
        res.send(customer);
      });
      */
    } catch (error) {
      res.status(500).send({
        error: 'Greska prilikom kreiranja klijenta'
      });
    }
  }
};
