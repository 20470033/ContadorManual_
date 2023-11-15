import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [conteo, setConteo] = useState(0);

  const contar = () => {
    setConteo(conteo + 1);
  };

  const restar = () => {
    if (conteo > 0) {
      setConteo(conteo - 1);
    }
  };

  const reiniciarConteo = () => {
    setConteo(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conteo</Text>
      <View style={styles.numeroContainer}>
        <Text style={styles.numero}>{conteo}</Text>
      </View>
      <View style={styles.botonesContainer}>
        <TouchableOpacity onPress={contar} style={styles.button}>
          <Text style={styles.buttonText}>Contar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={restar} style={styles.button}>
          <Text style={styles.buttonText}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reiniciarConteo} style={styles.button}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  numeroContainer: {
    borderColor: 'darkblue',
    borderWidth: 2,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  numero: {
    fontSize: 24,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    flex: 1,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
