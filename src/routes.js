var userController = require('./user/userController');

module.exports = function(app) {

    //adds a new User
    app.post('/api/newUser', function(req, res) {
        console.log('[route]: routing /api/newUser');
        userController.newBook(req, res);
    });
};