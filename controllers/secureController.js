const jwt = require('jsonwebtoken');

const { secret } = require('../config/environment');


function secureRoute(req, res, next) {
  console.log(req.headers);
  if (!req.headers.authorization)
    res.status(401).json({ message: 'unauthorised'});
  const token = req.headers.authorization.replace('Bearer ', '');
  console.log('token! --->', token);
  jwt.verify(token, secret, function(err) {
    if (err) {
      console.log(err);
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}

module.exports = {
  secure: secureRoute
};
