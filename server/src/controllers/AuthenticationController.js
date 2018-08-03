const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

function jwtSignUser (user) {
  return jwt.sign({
    exp: config.authentication.jwtExpiresIn,
    data: user
  }, config.authentication.jwtSecret);
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body);
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      });
    } catch (error) {
      res.status(500).send({
        error: 'Korisnik postoji. Molimo unesite drugu email adresu'
      });
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        return res.status(403).send({
          error: 'Uneseni podaci nisu ispravni'
        });
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Uneseni podaci nisu ispravni'
        });
      } else {
        res.send({
          user: user.toJSON(),
          token: jwtSignUser(user.toJSON())
        });
      }
    } catch (error) {
      res.status(500).send({
        error: 'Desila se greska prilikom logiranja'
      });
    }
  }
};
