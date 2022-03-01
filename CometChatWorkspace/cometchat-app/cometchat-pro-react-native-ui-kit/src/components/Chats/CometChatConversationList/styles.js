import { StyleSheet } from 'react-native';
import { widthRatio, heightRatio } from '../../../utils/consts';
import theme from '../../../resources/theme';

export default StyleSheet.create({
  conversationWrapperStyle: {
    height: '100%',
    backgroundColor: 'white',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversationHeaderStyle: {
    paddingTop: 6,
    backgroundColor: '#f6f6f6',
    paddingBottom: 10,
    position: 'relative',
    paddingHorizontal: 16 * widthRatio,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderColor.primary,
  },
  contactHeaderCloseStyle: {
    height: 24,
    width: '33%',
  },
  conversationHeaderTitleStyle: {
    margin: 0,
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 17,
    fontStyle: 'normal',
    lineHeight: 22,
  },
  contactSearchInputStyle: {
    flex: 1,
    paddingVertical: 4 * heightRatio,
    marginHorizontal: 8 * widthRatio,
    fontSize: 14,
    fontWeight: '500',
  },
  contactMsgStyle: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactMsgTxtStyle: {
    margin: 0,
    height: 30 * heightRatio,
    fontSize: 24,
    fontWeight: '600',
  },
  itemSeperatorStyle: {
    borderBottomWidth: 1,
    width: '85%',
    alignSelf: 'flex-end',
    paddingHorizontal: 12 * widthRatio,
  },
  headerContainer: {
    alignItems: 'center',
    height: 48,
    width: '100%',
    justifyContent: 'center',
  },
  flexGrow1: { flexGrow: 1 },
  deleteText: { color: '#fff' },
  safeAreaStyle: {
    backgroundColor: '#f6f6f6',
  },
  projectSearchStyle: {
    padding: 5,
    marginTop: 12,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1.41,
  },
  projectEditStyle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#3497F9',
  },
  projectCreateProjectStyle: {
    width: '50%'
  }
});
