import {StyleSheet, Dimensions} from 'react-native';

const dHeight = Dimensions.get('window').height;
const dWidth = Dimensions.get('window').width;

export const heightRatio = dHeight / 667;
export const widthRatio = dWidth / 375;

export default StyleSheet.create({
  rootWrapperStyle: {
    width: '100%',
  },
  errorTextStyle: {
    fontSize: 10 * heightRatio,
    color: 'red',
  },
});
