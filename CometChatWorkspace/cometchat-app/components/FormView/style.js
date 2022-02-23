import {StyleSheet, Dimensions} from 'react-native';

const dHeight = Dimensions.get('window').height;
const dWidth = Dimensions.get('window').width;

export const heightRatio = dHeight / 667;
export const widthRatio = dWidth / 375;

export default StyleSheet.create({
  rootWrapperStyle: {
    flex: 1,
  },
  contentWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderWrapper: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 999,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 32 * heightRatio,
    color: '#2da7ff',
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    paddingBottom: 16 * heightRatio,
  },
});
