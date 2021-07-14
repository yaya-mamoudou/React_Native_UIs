import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Delicious Food</Text>
      <Text style={styles.secondary}>We made fresh and Healthy food</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    fontFamily: 'roboto',

    fontSize: 27,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  secondary: {
    color: '#4d4d4d',
    fontSize: 13.5,
  },
  container: {
    // marginTop: '5%',
    // marginBottom: '2%',
    height: 70,
    backgroundColor: 'gray',
  },
});
