import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import PokeList from './components/PokeList';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pokeListHeader}>Pokemon API</Text>
      <PokeList/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pokeListHeader: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
    marginBottom: 10
  }
});
