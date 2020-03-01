import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './src/services/navigationService';
import Config from 'react-native-config';
import dotenvParseVariables from 'dotenv-parse-variables';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/configureStore';
import {Posts, PostInfo, PostViewImage} from './src/screens';
import StorybookUI from './storybook';
import {SCREENS} from './src/constants/messages';

const ENV = dotenvParseVariables({RUN_STORYBOOK: Config.RUN_STORYBOOK});

const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.posts.route}
          component={Posts}
          options={{title: SCREENS.posts.title}}
        />
        <Stack.Screen
          name={SCREENS.postInfo.route}
          component={PostInfo}
          options={{title: SCREENS.postInfo.title}}
        />
        <Stack.Screen
          name={SCREENS.postImage.route}
          component={PostViewImage}
          options={{title: SCREENS.postImage.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default class App extends Component {
  render() {
    if (ENV.RUN_STORYBOOK) {
      return <StorybookUI />;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationStack />
        </PersistGate>
      </Provider>
    );
  }
}
