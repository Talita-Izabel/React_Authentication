import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Title} from './styles';

export default function Session(){
  const user =  JSON.parse( localStorage.getItem('@noderest:user') );
  const history = useHistory();

  function logout(){
    localStorage.clear();

    history.push('/');
  }

  return(
    <div>
      <Button onClick={logout} type = "button">Sair</Button>
      <Title className="pt-4" >Olá, {user.name}! </Title>
    </div>
  );
}