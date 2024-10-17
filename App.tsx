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
import Gallary from './src/screens/gallary/Gallary';
import GallaryImageView from './src/screens/gallary/GallaryImageView';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='password_reset' component={PasswordReset} />
        <Stack.Screen name='gallary_image_view' component={GallaryImageView} />
        <Stack.Screen name='user_profile' component={UserProfile} />
        <Stack.Screen name='gallary' component={Gallary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
