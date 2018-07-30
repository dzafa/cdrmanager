const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().min(2)
    };

    const {error, value} = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            type: 'email',
            error: 'Unesite ispravan format email adrese'
          });
          break;
        case 'password':
          res.status(400).send({
            type: 'password',
            error: 'Lozinka ne moze sadrzavati brojeve. Minimalno 2 karaktera je obavezno za unos.'
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
  }
};
