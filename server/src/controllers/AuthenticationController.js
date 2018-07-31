const {User} = require('../models');

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (error) {
      res.status(400).send({
        type: 'email',
        error: 'Uneseni email postoji u bazi podataka'
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
          error: 'Molimo unesite ispravne podatke za pristup'
        });
      }

      const isPasswordValid = password === user.password;

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Uneseni podaci nisu tacni. Molimo pokusajte ponovo'
        });
      } else {
        res.send({
          user: user.toJSON()
        });
      }
    } catch (error) {
      res.status(403).send({
        type: 'msg',
        error: 'Neuspjesno logiranje. Molimo pokusajte ponovo'
      });
    }
  }

};
