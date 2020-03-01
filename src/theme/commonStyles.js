/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Shared styles for application
 */
import {StyleSheet} from 'react-native';
import {ZUMTHOR, BLACK} from './colors';

module.exports = StyleSheet.create({
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  standardText: {
    fontSize: 15,
  },
  pageBgColor: {
    backgroundColor: ZUMTHOR,
  },
  tileShadowColor: {
    shadowColor: BLACK,
  },
  contentCenter: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  justifyText: {
    textAlign: 'justify',
  },
});
