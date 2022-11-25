import { StyleSheet, Text, View, Image } from 'react-native';
import fondo from '../assets/fondo.png';
import { StatusBar } from 'expo-status-bar';

function Principal() {
  return (
    <View style={styles.container}>
        <Image source={fondo} style={styles.image}/>
        <Text style={styles.titulo}>Frases Breakingbad</Text>
        <Text style={styles.texto}>Bienvenidos a la aplicación de frases de la serie Breakingbad</Text>
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
  texto: {
    color: "black",
    fontSize: 20,
    padding: 20,
    textAlign: "center",
  },
  titulo: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
    padding: 15
  }
});

module.exports = Principal;