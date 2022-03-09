import {StyleSheet, Dimensions} from 'react-native';

const dHeight = Dimensions.get('window').height;
const dWidth = Dimensions.get('window').width;

export const heightRatio = dHeight / 667;
export const widthRatio = dWidth / 375;

export default StyleSheet.create({
  textInput: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  validationError: {
    width: '100%',
    marginTop: 8 * heightRatio,
    paddingLeft: 20 * widthRatio,
    paddingRight: 20 * widthRatio,
  },
  validationErrorText: {
    fontSize: 10,
    color: '#ff5252',
  },
});
