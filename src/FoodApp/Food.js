import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Category from './Category';
import Header from './Header';
import Title from './Title';

export default function Food() {
  return (
    <View style={styles.container}>
      <Header />
      <Title />
      <Category />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '6%',
    paddingVertical: '4%',
    backgroundColor: '#f8f8f8',
    // flex: 1,
  },
});
