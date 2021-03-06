const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 172800,
  });
}

router.post('/register', async (req, res) => {
  const { email } = req.body;
  try{
    //Verifica se o usuário já existe com o e-mail.
    if( await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exists!' });

    //Espera isso para continuar a executar (await).
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ 
      user,
      token: generateToken({ id: user.id }),  
    });
  }catch(err){
    //return res.status(400).send({ error: 'Registration failed' }) ;
    console.log(err);
  }
});

router.post('/authenticate', async(req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if(!user)
    return res.status(400).send({error: 'Usuário não encontrado!'});

  if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Senha inválida!' });

  user.password = undefined;

  return res.send({
    user,
    token: generateToken({ id: user.id }),
  });
});

module.exports = app => app.use('/', router);
