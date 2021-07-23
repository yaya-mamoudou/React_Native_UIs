import React, {useState} from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  Text,
  View,
  FlatList,
} from 'react-native';

import data from './data/data';
import RenderList from './RenderList';
import LinearGradient from 'react-native-linear-gradient';

export default function Calculator() {
  const [calcStage, setcalcStage] = useState('');
  const [result, setresult] = useState(0);

  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'black',
      height: height,
    },
    screen: {
      height: height * 0.5,
      // backgroundColor: 'orange',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: '2%',
    },
    pad: {
      height: height * 0.5,
    },
    operation: {
      color: 'white',
      fontSize: 20,
    },
    result: {
      fontSize: 65,
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const calculation = async item => {
    if (result == 'error') {
      setresult(0);
    }
    if (
      ['+', '*', '-', '/', '%'].indexOf(calcStage[calcStage.length - 1]) > -1 &&
      ['+', '*', '-', '/', '%'].indexOf(item.sign) > -1
    ) {
      let temp = await (calcStage.slice(0, -1) + item.sign);
      await setcalcStage(temp);
      // console.log(temp);
    } else {
      await setcalcStage(value => value + item.sign);
      if (item.color) {
        equalize();
      }
    }
  };

  const clear = () => {
    setcalcStage(calcStage.slice(0, -1));
  };

  const equalize = async () => {
    try {
      let temp = await calcStage;
      let result =
        temp == ''
          ? 0
          : ['+', '*', '-', '/', '%'].indexOf(temp[temp.length - 1]) > -1
          ? 'error'
          : eval(temp);
      let final = Number.isInteger(result)
        ? result
        : typeof result !== 'string'
        ? parseFloat(result.toFixed(2))
        : result;
      setresult(final);
    } catch (err) {
      console.error(err);
    }
  };

  const reset = () => {
    setresult(0);
    setcalcStage('');
  };

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={[
          {backgroundColor: 'red', flex: 1},
          index % 2 == 0 ? {marginRight: 10} : {marginLeft: 10},
        ]}>
        <Text>{item.key}</Text>
      </View>
    );
  };
  return (
    <LinearGradient
      colors={['rgba(121,9,9,0.68)', 'rgba(121,9,9,0.68)']}
      useAngle={true}
      angle={200}
      angleCenter={{x: 5, y: 1}}
      style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.result}>{result}</Text>

        <Text style={styles.operation}>{calcStage}</Text>
      </View>
      <View style={styles.pad}>
        <FlatList
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red',
          }}
          // ItemSeparatorComponent={() => (
          //   <View
          //     style={{
          //       width: '100%',
          //       backgroundColor: 'white',
          //       height: 0.7,
          //     }}></View>
          // )}
          data={data}
          keyExtractor={(item, index) => index}
          numColumns={4}
          renderItem={({item}) => {
            return (
              <RenderList
                equalize={equalize}
                clear={clear}
                calculation={calculation}
                reset={reset}
                item={item}
              />
            );
          }}
        />
      </View>
    </LinearGradient>
  );
}
