var AuthenticationController = require('./controllers/AuthenticationController');
var CustomersController = require('./controllers/CustomersController');
var SapController = require('./controllers/SapController');

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

  app.get('/sap', SapController.index);
  app.post('/sap', SapController.post);
  app.delete('/sap/:id', SapController.delete);
};
