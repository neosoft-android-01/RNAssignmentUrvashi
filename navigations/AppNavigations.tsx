import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator(); 
const HomeBottomNavigation= ()=> {
    return(
        <Tab.Navigator
            tabBarOptions= {{
                activeTintColor: Colors.headerColor 
            }}>
            <Tab.Screen 
                name= "Home" 
                component= {HomeScreen}
                options= { {
                    tabBarLabel: "Home",
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName= focused? "apps" : "apps-outline"
                        return <Ionicons name= {iconName} color={color} size={size} />
                    }
                }}/>
            <Tab.Screen 
                name= "Settings" 
                component= {HomeScreen}
                options= { {
                    tabBarLabel: "Settings",
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName= focused? "build" : "build-outline"
                        return <Ionicons name= {iconName} color={color} size={size} />
                    }
                }}/>
        </Tab.Navigator>
    )
}

const AppStack= createStackNavigator();
export const AppNavigation= ()=> {
    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name= 'Home' 
                component= {HomeBottomNavigation}
                options= {{headerShown: true}}/>
        </AppStack.Navigator>
    )
} 

/*const Drawer= createDrawerNavigator();
export const DrawerNavigation= ()=> {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name='Home'
                component= {HomeScreen}/>
        </Drawer.Navigator>
    )
}*/

const AuthStack= createStackNavigator();
export const AuthNavigation= ()=> {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name= 'Login' 
                component= {LoginScreen}
                options= {{headerShown: false}}/>
            <AuthStack.Screen
                name= 'Registration'
                component= {RegistrationScreen}
                options= {{headerShown: false}}/>
            <AuthStack.Screen
                name= 'ForgotPassword'
                component= {ForgotPasswordScreen}
                options= {{headerShown: false}}/>
        </AuthStack.Navigator>
    )
}




