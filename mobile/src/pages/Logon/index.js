import React, {useState} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { useNavigation, Link } from '@react-navigation/native';

export default function Logon(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('/authenticate', {
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
    }catch(error){
      Alert.alert(error.response.data.error);
      console.log(error.response.data.error);
    }
  }

  return(
    <View>
      <TextInput onChangeText={email => setEmail(email)} defaultValue={email} style={styles.input} label="E-mail" placeholder="fulano@gmail.com" />

      <TextInput onChangeText={password => setPassword(password)} defaultValue={password} secureTextEntry password style={styles.input} label="Senha" placeholder="*******" />

      <Button onPress={handleLogin} style={styles.button}  mode="contained" >Entrar</Button>

      <Link style={styles.link} to={'/Register'} >Não possui cadastro?</Link>
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