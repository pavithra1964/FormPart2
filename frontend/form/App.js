import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormTest from './screen/Form';
import history from './screen/history';
import FlatListBasics from './screen/mainscreen';
import { Router } from 'react-router-dom'
import BaseRouter from './routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Router history={history}>
          <BaseRouter />         
        </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
