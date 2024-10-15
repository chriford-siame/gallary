/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Home from './src/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './src/screens/auth/Signup';
import Login from './src/screens/auth/Login';
import UserProfile from './src/screens/auth/UserProfile';
import PasswordReset from './src/screens/auth/PasswordReset';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='password_reset' component={PasswordReset} />
        <Stack.Screen name='user_profile' component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
