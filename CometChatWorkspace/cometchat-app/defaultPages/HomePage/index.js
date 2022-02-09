import React from 'react';
import {connect} from 'react-redux';

import styles from './styles';
import * as actions from '../../store/action';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomePage = (props) => {
  if (!props.isLoggedIn) {
    props.navigation.navigate('LoginPage');
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.wrapperStyle}>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>CUSTOM: GoSource app based on CometChatUI is ready for testing</Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('GSCometChatUI');
                    }}>
                    <Text style={styles.linkStyle}>Launch GSCometChatUI</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => props.dispatch(actions.logout())}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(HomePage);
