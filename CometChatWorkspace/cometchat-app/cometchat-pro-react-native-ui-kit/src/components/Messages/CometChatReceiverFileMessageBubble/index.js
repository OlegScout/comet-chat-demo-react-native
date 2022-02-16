/* eslint-disable import/no-named-as-default */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Linking} from 'react-native';
import CometChatThreadedMessageReplyCount from '../CometChatThreadedMessageReplyCount';
import CometChatReadReceipt from '../CometChatReadReceipt';
import CometChatMessageReactions from '../../Messages/Extensions/CometChatMessageReactions';
import style from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CometChatAvatar from '../../Shared/CometChatAvatar';
import * as enums from '../../../utils/enums';
import * as actions from '../../../utils/actions';
import { CometChat } from '@cometchat-pro/react-native-chat';

const CometChatReceiverFileMessageBubble = (props) => {
  const message = {
    ...props.message,
    messageFrom: enums.MESSAGE_FROM_RECEIVER,
  };
  let avatarImg = '';

  if (message.receiverType === CometChat.RECEIVER_TYPE.GROUP) {
    avatarImg = { uri: message.sender.avatar };
  }

  return (
    <View style={style.mainContainerStyle}>
      <View style={style.messageContainer}>
        {props.message.receiverType === CometChat.RECEIVER_TYPE.GROUP ? (
          <View style={style.avatarStyle}>
            <CometChatAvatar
              cornerRadius={18}
              borderColor={props.theme.color.secondary}
              borderWidth={0}
              image={avatarImg}
              name={message.sender.name}
            />
          </View>
        ) : null}
        <View>
          {props.message.receiverType === CometChat.RECEIVER_TYPE.GROUP ? (
            <View style={style.senderNameContainer}>
              <Text style={{ color: props.theme.color.helpText }}>
                {message.sender.name}
              </Text>
            </View>
          ) : null}

          <View style={style.messageContainerStyle}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL(props.message.data.attachments[0].url)}
              onLongPress={() =>
                props.actionGenerated(actions.OPEN_MESSAGE_ACTIONS, message)
              }>
              <View
                style={[
                  style.messageWrapperStyle,
                  { backgroundColor: props.theme.backgroundColor.grey },
                ]}>
                <View style={style.attachmentNameStyle}>
                  <Text style={[style.attachmentName]}>
                    {props.message.data.attachments[0].name}
                  </Text>
                </View>
                <Icon name="file-download-outline" size={25} color="#3399FF" />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={style.containerStyle}>
            <View style={style.messageInfoWrapperStyle}>
              <CometChatReadReceipt {...props} message={message} />
              <CometChatThreadedMessageReplyCount
                {...props}
                message={message}
              />
            </View>
            <CometChatMessageReactions
              theme={props.theme}
              {...props}
              message={message}
              showMessage={props?.showMessage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CometChatReceiverFileMessageBubble;
