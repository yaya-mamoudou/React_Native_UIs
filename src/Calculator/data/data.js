import React from 'react';

import SignIcon from '../assets/signIcon.svg';
import BackSpace from 'react-native-vector-icons/Ionicons';

export default data = [
  {sign: 'AC', type: 'clear'},
  {sign: <SignIcon width="100%" height="100%" />, type: 'svg'},
  {sign: '%', type: 'operator'},
  {sign: '/', type: 'operator', color: 'orange'},
  {sign: '7', type: 'operator'},
  {sign: '8', type: 'operator'},
  {sign: '9', type: 'operator'},
  {sign: '*', type: 'operator', color: 'orange'},
  {sign: '4', type: 'operator'},
  {sign: '5', type: 'operator'},
  {sign: '6', type: 'operator'},
  {sign: '-', type: 'operator', color: 'orange'},
  {sign: '1', type: 'operator'},
  {sign: '2', type: 'operator'},
  {sign: '3', type: 'operator'},
  {sign: '+', type: 'operator', color: 'orange'},
  {sign: '0', type: 'operator'},
  {sign: '.', type: 'operator'},
  {
    sign: <BackSpace name="md-backspace-outline" color="white" size={25} />,
    type: 'backspace',
  },
  {sign: '=', type: 'operator', color: 'equal'},
];
