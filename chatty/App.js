import React from "react";
import { Ionicons } from "@expo/vector-icons";
import 'react-native-gesture-handler';
//components
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import { colors } from "./config/constant";
import SignUp from "./screens/SignUp";
import Chat from './screens/Chat';
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const ChatsStack = createStackNavigator();
const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats}></ChatsStack.Screen>
      <ChatsStack.Screen name="Chat" component={Chat}></ChatsStack.Screen>
    </ChatsStack.Navigator>
  )

}

const Tabs = createBottomTabNavigator();

//component
const TabsScreen = () => (
  <Tabs.Navigator screenOptions={{ headerShown: false }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Chats') {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
        } else if (route.name === 'Settings') {
          iconName = focused
            ? 'settings'
            : 'settings-outline';
        } else if (route.name === "SignUp") {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })
    }

    //tabBarOptions = prop
    tabBarOptions={{
      activeTintColor: colors.primary
    }}
  >
    <Tabs.Screen name="Chats" component={ChatsScreen} />
    <Tabs.Screen name="Settings" component={Settings} />
    <Tabs.Screen name="Sign" component={SignUp} />
  </Tabs.Navigator >
)

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }} >
        <MainStack.Screen name="Tabs" component={TabsScreen} />
        <MainStack.Screen name="SignUp" component={SignUp} />
      </MainStack.Navigator>
    </NavigationContainer >
  )
}

export default App;
