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
      Sap.findOrCreate({
        where: {
          external_code: req.body.external_code
        },
        defaults: req.body
      }).spread((data, created) => {
        if (created) {
          res.status(200).send({
            data: data,
            message: 'Sap šifra je kreirana',
            code: 2
          });
        } else {
          data.update(req.body);
          res.status(200).send({
            message: 'Update sap šifre završen',
            code: 3
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        error: 'Greska prilikom kreiranja sap šifre'
      });
    }
  },
  delete (req, res) {
    try {
      Sap.findById(req.params.id).then(data => {
        return data.destroy();
      }).then(() => {
        res.send('Sap šifra izbrisana');
      });
    } catch (error) {
      res.status(500).send({
        error: error
      });
    }
  }

};
