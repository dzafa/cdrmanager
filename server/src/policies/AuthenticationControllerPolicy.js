const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().min(2).required()
    };

    const {error, value} = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            type: 'email',
            error: 'Format email adrese nije validan'
          });
          break;
        case 'password':
          res.status(400).send({
            type: 'password',
            error: 'Lozinka mora biti veca od 2 karaktera'
          });
          break;
        default:
          res.status(400).send({
            error: 'Neispravna registracija'
          });
          break;
      }
    } else {
      console.log(value);
      next();
    }
  },

  login (req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().min(2).required()
    };

    const {error, value} = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Format email adrese nije validan'
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'Lozinka mora biti veća od 2 karaktera'
          });
          break;
        default:
          res.status(400).send({
            error: 'Neispravna autorizacija'
          });
          break;
      }
    } else {
      console.log(value);
      next();
    }
  }
};
