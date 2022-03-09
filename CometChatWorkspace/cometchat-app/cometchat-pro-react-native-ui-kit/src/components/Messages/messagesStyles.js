import { StyleSheet } from 'react-native';
import { heightRatio, widthRatio } from '../../utils/consts';

export default StyleSheet.create({
  receiverMessageWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 3 * widthRatio,
  },
  senderMessageWrapper: {
    backgroundColor: '#DCF7C5',
    borderRadius: 8,
    paddingHorizontal: 3 * widthRatio,
    maxWidth: '65%',
    alignSelf: 'flex-end',
    marginRight: 10 * widthRatio,
    marginBottom: 10 * heightRatio,
  },
  senderMessageImageWrapper: {
    backgroundColor: '#DCF7C5',
    borderRadius: 8,
    paddingHorizontal: 3 * widthRatio,
    paddingTop: 3 * heightRatio,
    maxWidth: '65%',
    alignSelf: 'flex-end',
    marginRight: 10 * widthRatio,
    marginBottom: 10 * heightRatio,
  },
  receiverMessageImageWrapper: {
    flexDirection: 'row',
    borderRadius: 8,
    width: '100%',
    maxWidth: '81%',
  },
  senderImageWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginBottom: 4 * heightRatio,
    paddingTop: 3 * heightRatio,
  },
  receiverImageWrapper: {
    width: '100%',
    height: 200,
    flexShrink: 0,
  },
  receiverNameWrapper: {
    marginBottom: 2 * heightRatio,
    paddingHorizontal: 4 * widthRatio,
    paddingTop: 7 * heightRatio,
  },
  receiverNameText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  messageBodyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 4 * widthRatio,
    paddingVertical: 5 * heightRatio,
    maxWidth: '100%',
    borderRadius: 12,
  },
  senderMessageBodyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 7 * widthRatio,
    paddingVertical: 5 * heightRatio,
  },
  messageInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 6 * heightRatio,
    marginRight: 8 * widthRatio,
  },
  senderAutoLinkText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.3,
  },
});
