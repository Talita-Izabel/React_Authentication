import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Title, Div, Forms } from './styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    
    try{
      const response = await api.post('/register', {
        name,
        email,
        password,
      })

      const info = response.data;
      console.log(response.data.user.email, response.data.user.name);

      localStorage.setItem('@noderest:token', info.token);
      localStorage.setItem('@noderest:user',  JSON.stringify(info.user));

      alert("Logado!");
      history.push('/session');
    }
    catch(error){
      if(error){
        console.log("ERROOOOOR");
        console.log(error);
      }
    }
  }

  return(
    <Div>
      <Title>Registrar</Title>
      <Forms onSubmit={handleRegister} >
        <Form.Group>
          <Form.Control placeholder='Nome' value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Control type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value) } />
        </Form.Group>

        <Form.Group>
        <Form.Control type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>        
        
        <div className="text-center pt-3">
          <Button block variant="secondary" type="submit">Registrar</Button>
        </div>

        <br />
        <Link to="/">Já possui cadastro? Entrar! </Link>
      </Forms>
    </Div>
  );
}