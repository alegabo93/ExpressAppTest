const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: String,
  avatar: String,
  lastLogin: Date,
  signupDate: {
    type: Date,
    default: Date.now()
  },
  password: {
    type: String,
    select: false
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  }
});

UserSchema.pre('save', next => {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next();
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next();
      }

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.gravatar = () => {
  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=200&d=retro';
  }

  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`;
};

module.exports = mongoose.model('User', UserSchema);
