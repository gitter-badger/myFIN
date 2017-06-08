module.exports = function(app) {
    app.get('/user', function(req, res) {
        res.send(200, 'newUser.html');
    });
};