import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Category() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="ios-ice-cream-outline" size={27} />
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="beer-outline" size={27} />
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="md-nutrition-outline" size={27} />
      </View>
      <View style={[styles.iconContainer, {backgroundColor: 'black'}]}>
        <Icon
          style={[styles.icon, {color: 'white'}]}
          name="md-pizza-outline"
          size={27}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: 'black',
    width: 53,
    height: 51,
    elevation: 50,
    borderColor: 'red',
  },
  icon: {},
});
