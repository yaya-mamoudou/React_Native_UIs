import React from 'react';
import {useWindowDimensions, Text, View, TouchableOpacity} from 'react-native';

export default RenderList = ({item, equalize, reset, clear, calculation}) => {
  const {width, height} = useWindowDimensions();
  switch (item.type) {
    case 'clear':
      return (
        <TouchableOpacity
          onPress={() => reset()}
          style={{
            flex: 1,
            height: height * 0.5 * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 25}}>
            {item.sign}
          </Text>
        </TouchableOpacity>
      );
      break;

    case 'svg':
      return (
        <TouchableOpacity
          onPress={() => calculation(item)}
          style={{
            flex: 1,
            height: height * 0.5 * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: 25, height: 25}}>{item.sign}</View>
        </TouchableOpacity>
      );
      break;

    case 'operator':
      return (
        <TouchableOpacity
          onPress={
            item.color !== 'equal' ? () => calculation(item) : () => equalize()
          }
          style={{
            flex: 1,
            height: height * 0.5 * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={
              item.color == 'equal' && {
                backgroundColor: 'orange',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                height: '40%',
              }
            }>
            <Text
              style={{
                color: item.color
                  ? item.color == 'equal'
                    ? 'white'
                    : 'orange'
                  : 'white',
                fontSize: 23,
                fontWeight: 'bold',
              }}>
              {item.sign}
            </Text>
          </View>
        </TouchableOpacity>
      );
      break;

    case 'backspace':
      return (
        <TouchableOpacity
          onPress={() => clear()}
          style={{
            flex: 1,
            height: height * 0.5 * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {item.sign}
        </TouchableOpacity>
      );
      break;

    default:
      break;
  }
};
