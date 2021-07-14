import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import Basket from 'react-native-vector-icons/SimpleLineIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Menu style={styles.menu} name="text-short" size={30} />
      <View style={styles.basket}>
        <Basket name="basket" color="white" size={25} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#aae',
    alignItems: 'center',
    height: 50,
  },
  basket: {
    padding: '2%',
    backgroundColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
  },
});
