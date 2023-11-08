import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/Components/Title/';
import Form from "./src/Components/Form/";


export default function App() {
  return (

    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1D7F8',
    paddingTop: 80,
  }, 

});
