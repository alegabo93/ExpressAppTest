const service = require('../services/index');

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: 'No tienes autorización'
    });
  }

  const token = req.headers.authorization.split(' ')[1];
  service.decodeToken(token)
    .then(response => {
      req.user = response;
      next();
    })
    .catch(response => {
      const {status, message} = response;
      res.status(status).send({message});
    });
};

module.exports = auth;
