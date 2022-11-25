import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Quote from '../components/Quote.js';
import fondo from '../assets/fondo.png';
import { StatusBar } from 'expo-status-bar';

function Frase() {
  return (
    <View style={styles.container}>
      <Image source={fondo} style={styles.image}/>
      <Quote/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
  },
});

module.exports = Frase;