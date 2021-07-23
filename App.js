import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Calculator from './src/Calculator/Calculator';
import Food from './src/FoodApp/Food';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Food />
        <Calculator />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
