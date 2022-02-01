import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect} from 'react-redux';

import LoginPage from './defaultPages/LoginPage';
import HomePage from './defaultPages/HomePage';
import {
  CometChatUserProfile,
  CometChatUI,
  CometChatMessages,
  CometChatUserListWithMessages,
  CometChatUserList,
  CometChatGroupListWithMessages,
  CometChatGroupList,
  CometChatConversationListWithMessages,
  CometChatConversationList,
} from './cometchat-pro-react-native-ui-kit';

function StackNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={props.isLoggedIn ? 'CometChatUI' : null}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CometChatUI" component={CometChatUI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(StackNavigator);
