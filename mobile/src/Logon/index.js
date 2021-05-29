import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Logon(){
  return(
    <View>
      <TextInput style={styles.input} label="E-mail" placeholder="fulano@gmail.com" />

      <TextInput style={styles.input} label="Senha" placeholder="*******" />

      <Button style={styles.button}  mode="contained" >Entrar</Button>
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
});