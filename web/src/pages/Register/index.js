import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    
    try{
      const response = await api.post('/', {
        name,
        email,
        password,
      })

      const info = response.data;
      console.log(response.data.user.email);

      localStorage.setItem('token', info.token);
      localStorage.setItem('user',  JSON.stringify(info.user));

      alert("Logado!");
      history.push('/session');
    }
    catch(error){
      if(error){
        console.log(error);
        /*this.setState({ errorMessage: error.data.error });
        console.log(error);*/
      }
    }
  }

  return(
    <div>
      <form onSubmit={handleRegister} >
        <h1>Register</h1>
        <input placeholder='Nome' value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value) } />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="button" type="submit">Registrar</button>
      </form>
      
    </div>
  );
}