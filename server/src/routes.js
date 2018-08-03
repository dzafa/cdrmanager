var AuthenticationController = require('./controllers/AuthenticationController');
var CustomersController = require('./controllers/CustomersController');

var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = function (app) {
  app.post('/registracija',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/prijava',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login);

  app.get('/klijenti', CustomersController.index);
  app.post('/klijent', CustomersController.post);
};
