// imports
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {

  createUserMiddleWare: function(req, res, next) {
    // This is where we obtain the hash of the user's password
    console.log('creating user: ', req.body.username);
    const passwordDigest = bcrypt.hashSync(req.body.password, 10);
    User.createUser(req.body.username, passwordDigest)
      .then(user => {
        res.locals.newTokenData = user.username;
        next()
      })
      .catch(err => console.log('Error creating user ', err));
      // handle errors / validation for user creation and send back appropriate error to be caught by client.
  },

  verifyUserMiddleware: function(req, res, next) {
    console.log('verifying user', req.body.username);
    User.findUser(req.body.username)
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password_digest))
          console.log("this is the result of bcrypt comparesync", bcrypt.compareSync(req.body.password, user.password_digest))
          res.locals.newTokenData = user.username;
          next();
      })
      .catch(err => {
        console.log("username and or password incorrect", err);
      })
  }
}
