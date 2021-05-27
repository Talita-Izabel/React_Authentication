import React from 'react';
import { Link } from 'react-router-dom';

export default function Logon(){
  return(
    <div>
      <form >
        <h1>Login</h1>
        <input type="email" placeholder='E-mail' />
        <input type="password" placeholder="Senha" />
        <button className="button" type="submit">Entrar</button>
        <Link to="/register" >Registrar</Link>
      </form>
      
    </div>
  );
}