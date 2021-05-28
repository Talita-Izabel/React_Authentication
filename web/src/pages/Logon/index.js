import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Title, Div, Forms } from './styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Logon(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [state, setState] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('/authenticate', {
        email,
        password,
      })

      const info = response.data;
      console.log(response.data.user.email);

      localStorage.setItem('@noderest:token', info.token );
      localStorage.setItem('@noderest:user',  JSON.stringify(info.user));

      alert("Logado!");
      history.push('/session');
     
    }
    catch(error){
      if(error){
        //setState({ errorMessage: error.data.error });
        console.log( error );
      }
    }
  }

  return(
    <Div>
      <Title>Login</Title>
      {/* { !! state.errorMessage && <h2>{state.errorMessage}</h2> } */}
      <Forms onSubmit={handleLogin} >
        
        <Form.Group>
          <Form.Control type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value) } />
        </Form.Group>

        <Form.Group>
          <Form.Control type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        
        <div className="text-center pt-3">
          <Button block variant="secondary" type="submit">Entrar</Button>
        </div>
        <br />
        <Link to="/register" >Não possui cadastro? </Link>
      </Forms>

      
    </Div>
  );
}