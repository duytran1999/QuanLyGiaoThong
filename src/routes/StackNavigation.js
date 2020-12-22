import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'


let AppStack = createStackNavigator();

class Stack extends Component {
    render() {
        return (
            <NavigationContainer>
                <AppStack.Navigator >
                    <AppStack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false,  }} />
                    <AppStack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false, }} />
                    <AppStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
                </AppStack.Navigator>
            </NavigationContainer>
        )
    }
}
export default Stack;


