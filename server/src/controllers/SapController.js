const {Sap} = require('../models');

module.exports = {
  index (req, res) {
    try {
      Sap.findAll({
        order: [['createdAt', 'desc']]
      }).then(list => {
        res.send(list);
      });
    } catch (error) {
      res.status(500).send({
        error: 'Greska prilikom slanja liste sap šifri'
      });
    }
  },
  post (req, res) {
    try {
      Sap.create(req.body).then(sap => {
        res.send(sap);
      });
    } catch (error) {
      res.status(500).send({
        error: 'Greska prilikom kreiranja sap šifre'
      });
    }
  }
};
