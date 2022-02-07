/* eslint-disable import/no-duplicates */
import React, { useEffect, useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text } from 'react-native';
import { CometChatGroupListWithMessages } from '../Groups';
import { CometChatUserListWithMessages } from '../Users';
import { CometChatConversationListWithMessages } from '../Chats';
import { CometChatContextProvider } from '../../cometchat-pro-react-native-ui-kit/src/utils/CometChatContext';
import { CometChatUserProfile } from '../UserProfile';
import ShopifyWebView from '../ShopifyWebView';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MCIIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../cometchat-pro-react-native-ui-kit/src/resources/theme';
import { heightRatio } from '../../cometchat-pro-react-native-ui-kit/src/utils/consts';

const Tab = createBottomTabNavigator();

function GSCometChatUI() {
  const [tabs, setTabs] = useState(null);
  const contextRef = useRef(null);

  useEffect(() => {
    checkRestrictions();
  }, []);
  const checkRestrictions = async () => {
    let isChatEnabled = await contextRef.current.state.FeatureRestriction.isRecentChatListEnabled();
    let isGroupListEnabled = await contextRef.current.state.FeatureRestriction.isGroupListEnabled();
    let isUserSettingsEnabled = await contextRef.current.state.FeatureRestriction.isUserSettingsEnabled();
    let isUserListEnabled = await contextRef.current.state.FeatureRestriction.isUserListEnabled();
    let isCallListEnabled = await contextRef.current.state.FeatureRestriction.isCallListEnabled();
    setTabs({
      isChatEnabled,
      isGroupListEnabled,
      isUserSettingsEnabled,
      isUserListEnabled,
      isCallListEnabled,
    });
  };
  return (
    <CometChatContextProvider ref={contextRef}>
      {tabs ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              // let iconName;

              if (route.name === 'Projects') {
                return (
                  <MaterialIcons
                    name="chat"
                    size={15 * heightRatio}
                    color={color}
                  />
                );
              }
              if (route.name === 'Settings') {
                return (
                  <MaterialIcons
                    name="settings"
                    size={15 * heightRatio}
                    color={color}
                  />
                );
              }
              if (route.name === 'Calls (Users)') {
                return (
                  <MaterialIcons
                    name="call"
                    size={15 * heightRatio}
                    color={color}
                  />
                );
              }
              if (route.name === 'Cart (Groups)') {
                return (
                  <MaterialIcons
                    name="shopping-cart"
                    size={15 * heightRatio}
                    color={color}
                  />
                );
              }
              if (route.name === 'Shop') {
                return (
                  <MaterialIcons
                    name="shopping-bag"
                    size={15 * heightRatio}
                    color={color}
                  />
                );
              }

              // You can return any component that you like here!
              // return (
              //   <Ionicons
              //     name={iconName}
              //     size={24 * heightRatio}
              //     color={color}
              //   />
              // );
            },
          })}
          tabBarOptions={{
            activeTintColor: theme.color.blue,
            inactiveTintColor: 'rgba(0,0,0,0.5)',
            activeBackgroundColor: theme.color.white,
            inactiveBackgroundColor: theme.color.white,
            labelStyle: { fontSize: 12 },
          }}>
          {tabs.isChatEnabled && (
            <Tab.Screen
              name="Projects"
              component={CometChatConversationListWithMessages}
            />
          )}
          {tabs.isUserListEnabled && (
            <Tab.Screen
              name="Calls (Users)"
              component={CometChatUserListWithMessages}
            />
          )}
          <Tab.Screen
            name="Shop"
            component={ShopifyWebView}
          />
          {tabs.isGroupListEnabled && (
            <Tab.Screen
              name="Cart (Groups)"
              component={CometChatGroupListWithMessages}
            />
          )}
          {tabs.isUserSettingsEnabled && (
            <Tab.Screen name="Settings" component={CometChatUserProfile} />
          )}
        </Tab.Navigator>
      ) : null}
    </CometChatContextProvider>
  );
}

export default GSCometChatUI;
