import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Category from './Category';
import FoodList1 from './FoodList1';
import Header from './Header';
import Title from './Title';

export default function Food() {
  return (
    <View style={styles.container}>
      <Header />
      <Title />
      <Category />
      <FoodList1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    backgroundColor: '#fdfdfd',
    height: Dimensions.get('window').height,
  },
});
