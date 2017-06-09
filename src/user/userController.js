var UserModel = require('./user');

exports.newBook = function(req, res) {
    console.log('[userController]: creating new user...');
    user = new UserModel( {
        name:     req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err, user) {
        console.log('user created');
        if(err) return res.status(500).send(err);
        res.status(200).json(user);
    });
};