const User = require('../models/user');
const service = require('../services/index');

const signUp = (req, res) => {
  const {email, displayName, password} = req.body;
  const user = new User({
    email,
    displayName,
    password
  });

  user.save(err => {
    if (err) {
      res.status(500).send({
        message: 'Error al guardar usuario'
      });
    }

    res.status(200).send({
      token: service.createToken(user)
    });
  });
};

const signIn = (req, res) => {
  const {email} = req.body;
  User.find({email}, (err, user) => {
    if (err) {
      res.status(500).send({
        message: 'Error al iniciar sesion'
      });
    }

    if (!user) {
      res.status(404).send({
        message: 'No esiste el usuario'
      });
    }

    req.user = user;

    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createHash(user)
    });
  });
};

module.exports = {
  signUp,
  signIn
};
