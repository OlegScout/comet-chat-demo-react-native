import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {selectIsLoggedIn} from './store/auth/selectors';
import SignUpPage from './defaultPages/SignUpPage';
import SmsConfirmingPage from './defaultPages/SmsConfirmingPage';
import GSCometChatUI from './components/GSCometChatUI';
import {
  CometChatUI,
  CometChatMessages,
  CometChatUserListWithMessages,
  CometChatUserList,
  CometChatGroupListWithMessages,
  CometChatGroupList,
  CometChatConversationListWithMessages,
  CometChatConversationList,
} from './cometchat-pro-react-native-ui-kit';

const Stack = createStackNavigator();

function StackNavigator() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <>
            <Stack.Screen name="GSCometChatUI" component={GSCometChatUI} />
            <Stack.Screen name="CometChatUI" component={CometChatUI} />
            <Stack.Screen name="Conversation" component={CometChatConversationListWithMessages} />
            <Stack.Screen name="ConversationComponent" component={CometChatConversationList} />
            <Stack.Screen name="Group" component={CometChatGroupListWithMessages} />
            <Stack.Screen name="GroupComponent" component={CometChatGroupList} />
            <Stack.Screen name="Users" component={CometChatUserListWithMessages} />
            <Stack.Screen name="UsersComponent" component={CometChatUserList} />
            <Stack.Screen name="CometChatMessages" component={CometChatMessages} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="SmsConfirmingPage" component={SmsConfirmingPage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(StackNavigator);
