import React from 'react';
import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function FoodList1() {
  let {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    containerFood: {
      height: '100%',
      width: width > height ? width * 0.3 : width * 0.47,
      marginRight: width > height ? width * 0.05 : width * 0.07,
    },
    container: {
      height: height > width ? height * 0.45 : height * 0.6,
      marginTop: 10,
      paddingLeft: '2%',
    },
    img: {
      width: width > height ? width * 0.3 * 0.8 : width * 0.47 * 0.8,
      height: width > height ? width * 0.3 * 0.8 : width * 0.47 * 0.8,
      alignSelf: 'center',
      borderRadius: 200,
      backgroundColor: '#fdfdfd',
      marginTop: -50,
    },
    imgDetail: {
      height: '73%',
      width: '90%',
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 20,
      bottom: '8%',
      position: 'absolute',
      elevation: 10,
    },
  });
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.container}
      data={List1}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => {
        return (
          <View style={styles.containerFood}>
            <View style={styles.imgDetail}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 20,
                  paddingHorizontal: '10%',
                }}>
                <Text
                  style={{
                    fontSize: 22.5,
                    fontWeight: 'bold',
                    marginBottom: 7,
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 14.4, marginBottom: 7}}>
                  {item.desc}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', flex: 1}}>
                    ${item.price}
                  </Text>
                  <Icon name="heart" size={18} />
                </View>
              </View>

              <View style={styles.img}>
                <ImageBackground
                  source={item.img}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const List1 = [
  {
    img: require('../assets/foodUI/food1.png'),
    name: 'Crab Ramen',
    desc: 'Spicy with garlic',
    price: '24.00',
  },
  {
    img: require('../assets/foodUI/food3.png'),
    name: 'Chicken Slice',
    desc: 'Real chicken',
    price: '12.00',
  },
  {
    img: require('../assets/foodUI/food1.png'),
    name: 'Crab Ramen',
    desc: 'Spicy with garlic',
    price: '24.00',
  },
  {
    img: require('../assets/foodUI/food3.png'),
    name: 'Chicken Slice',
    desc: 'Real chicken',
    price: '12.00',
  },
];
