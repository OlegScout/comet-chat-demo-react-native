import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#061C23',
  },
  contentContainer: {
    padding: 24,
    justifyContent: 'space-between',
  },
  title: {
    width: '100%',
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 43,
    fontWeight: '500',
  },
  label: {
    width: '100%',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700',
  },
  spacing: {
    marginBottom: 16,
  },
});

export default style;
