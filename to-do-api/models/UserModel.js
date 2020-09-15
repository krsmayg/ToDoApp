const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Please tell your name'],
    minlength: [3, 'User must have at least 3 characters' ],
    maxlength: 12
  },
  email: {
    type: String,
    required: [true,'Please tell your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true,'Please tell your password'],
    minlength: [8, 'Password must have at least 5 characters'],
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true,'Please confirm your password'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'Password are not the same'
    }
   
  }
});

userSchema.pre('save', async function(next) {
  // Запускается эта функция если пароль был изменен
  if (!this.isModified('password')) return next();
  // Хэшируем пароль и стоимость вычисления
  this.password = await bcrypt.hash(this.password, 12);
  // Удаляем ненужное поле, поскольку нам нужно подтверждение лишь для валидации
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword =  async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
}


 const User = mongoose.model('User', userSchema);
 module.exports = User;

