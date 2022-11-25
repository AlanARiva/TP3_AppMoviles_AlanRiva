import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';


const baseURL = "https://www.breakingbadapi.com/api/quote/random";

export default function Quote() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        actualizar();
      }, []);

    if (!post) return <Text>Ocurrió un error 404.</Text>;

    function actualizar(){
        axios
          .get(baseURL)
          .then((response) => response.data)
          .then((json) => {
            setPost(json[0]);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  
    return (
        <View style={styles.container}>
            <View style={styles.quote}>
                <Text style={styles.title}>{post.author}</Text>
                <Text style={styles.frase}>"{post.quote}"</Text>
            </View>
            <Button title="Cambiar frase" color="green" style={styles.boton} onPress={actualizar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 300,
      height: 300,
      
    },
    quote: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
      },
    boton: {
        radius: 100,
        backgroundColor: '#000',
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
    },
    frase: {
        color: 'black',
    }
  });

module.exports = Quote;
