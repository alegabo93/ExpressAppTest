const jwt = require('jwt-simple');
const moment = require('moment');
const secretToken = 'myexpressapp';

const createToken = user => {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };

  return jwt.encode(payload, secretToken);
};

const decodeToken = token => {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, secretToken);

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token expiró'
        });
      }

      resolve(payload.sub);
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid token'
      });
    }
  });

  return decoded;
};

module.exports = {
  createToken,
  decodeToken
};
