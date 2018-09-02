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
      Customers.findOrCreate({
        where: {
          contract_number: req.body.contract_number
        },
        defaults: {
          contract_number: req.body.contract_number,
          cdr_number: req.body.cdr_number,
          request_number: req.body.request_number,
          name: req.body.name,
          email: req.body.email,
          contact_number: req.body.contact_number,
          address: req.body.address,
          city: req.body.city,
          image: req.file.filename,
          contact_person: req.body.contact_person,
          services_type: req.body.services_type,
          bht_support_contact: req.body.bht_support_contact
        }
      }).spread((data, created) => {
        if (created) {
          res.status(200).send({
            data: data,
            message: 'Novi klijent je kreiran',
            code: 2
          });
        } else {
          data.update({
            cdr_number: req.body.cdr_number,
            request_number: req.body.request_number,
            name: req.body.name,
            email: req.body.email,
            contact_number: req.body.contact_number,
            address: req.body.address,
            city: req.body.city,
            image: req.file.filename,
            contact_person: req.body.contact_person,
            services_type: req.body.services_type,
            bht_support_contact: req.body.bht_support_contact
          });
          res.status(200).send({
            message: 'Klijent je izmijenjen',
            code: 3
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        error: 'Greska prilikom kreiranja klijenta'
      });
    }
  },
  delete (req, res) {
    try {
      Customers.findById(req.params.id).then(data => {
        return data.destroy();
      }).then(() => {
        res.send('Korisnik je izbrisan');
      });
    } catch (error) {
      res.status(500).send({
        error: error
      });
    }
  },
  getByName (req, res) {
    try {
      Customers.findById(req.params.id).then((data) => {
        res.send(data);
      });
    } catch (error) {
      res.status(500).send({
        error: error
      });
    }
  }
};
