import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default function Session(){
  const [user, setUser] = useState('');
  
  AsyncStorage.getItem('@noderest:user').then((user) => {
    
    const username = user;
    const usr = JSON.parse(username);
    setUser(usr)

  });

  return(
    <View>
      <Text style={styles.text} >Olá, {user.name}! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  }
});