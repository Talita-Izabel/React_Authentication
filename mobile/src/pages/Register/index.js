import React, {useState} from 'react';
import { View, Alert,StyleSheet } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { useNavigation, Link } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleRegister(e){
    e.preventDefault();

    try{
      const response = await api.post('/register', {
        name,
        email,
        password,
      })

      const { token, user } = response.data;
      console.log(token)
      await AsyncStorage.multiSet([
        ['@noderest:token', token],  
        ['@noderest:user', JSON.stringify(user)], 
      ]);

      Alert.alert('Usuário logado!');
      navigation.navigate('Session');

    }
    catch(error){
      Alert.alert(error.response.data.error);
    }
  }

  return(
    <View>
      <TextInput onChangeText={name => setName(name)} defaultValue={name} style={styles.input} label="Nome" placeholder="Fulano" />

      <TextInput onChangeText={email => setEmail(email)} defaultValue={email} style={styles.input} label="E-mail" placeholder="fulano@gmail.com" />

      <TextInput onChangeText={password => setPassword(password)} defaultValue={password} secureTextEntry password style={styles.input} label="Senha" placeholder="*******" />

      <Button onPress={handleRegister} style={styles.button}  mode="contained" >Registrar</Button>

      <Link style={styles.link} to={'/Logon'} >Já possui cadastro? Entrar!</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: '10%',
  },

  button: {
    marginTop: '10%',
  },

  link:{
    color: '#4682B4',
    marginTop: '10%',
    textAlign: 'center'
  }
});