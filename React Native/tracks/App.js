import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//screens
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
//Provider
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext"
//navigate
import { setNavigator } from './src/navigationRef'; //route
//icon
import { FontAwesome } from '@expo/vector-icons';

//NAVIGATOR HOOKUP

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />

}

const switchNavigator = createSwitchNavigator({
  //Login Screen or Initial Screen
  ResolveAuth: ResolveAuthScreen,

  //Stack Navigator
  //signup Screen
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),

  //Bottom Tab Navigator
  mainFlow: createBottomTabNavigator({
    //Stack Navigator
    //TrackList Screen
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

//en dıştaki switchNavigator export edilir
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    //navigator is references - use every components
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>

  );
};

