import {StyleSheet, Dimensions} from 'react-native';

const dHeight = Dimensions.get('window').height;
const dWidth = Dimensions.get('window').width;

export const heightRatio = dHeight / 667;
export const widthRatio = dWidth / 375;

export default StyleSheet.create({
  rootWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputWrapperStyle: {
    paddingTop: 10 * heightRatio,
    paddingBottom: 10 * heightRatio,
    paddingLeft: 20 * widthRatio,
    paddingRight: 20 * widthRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    width: '100%',
    fontSize: 12 * heightRatio,
    textAlign: 'center',
    marginTop: 8 * heightRatio,
  },
  textInput: {
    marginTop: 10 * heightRatio,
    marginBottom: 10 * heightRatio,
    marginLeft: 24 * widthRatio,
    marginRight: 24 * widthRatio,
    paddingTop: 8 * heightRatio,
    paddingBottom: 8 * heightRatio,
    paddingLeft: 10 * widthRatio,
    paddingRight: 10 * widthRatio,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bbb',
  },
  loginBtn: {
    backgroundColor: '#333',
    borderRadius: 10,
    color: 'white',
    paddingTop: 8 * heightRatio,
    paddingBottom: 8 * heightRatio,
    paddingLeft: 22 * widthRatio,
    paddingRight: 22 * widthRatio,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12 * heightRatio,
  },
});
