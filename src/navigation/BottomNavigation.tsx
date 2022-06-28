import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {MainScreen} from '../screens/Main/MainScreen';
import {ProfileScreen} from '../screens/Profile/ProfileScreen';
import {LIGHT_THEME} from '../theme';
import {Ionicons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const THEME = LIGHT_THEME;

interface ITabBarIcon {
    focused: boolean;
    color: string;
}

export const BottomNavigation = () => {

    return (
        <Tab.Navigator
            shifting={true}
            barStyle={{backgroundColor: THEME.SECOND_COLOR}}
            screenOptions={{
                tabBarActiveTintColor: THEME.MAIN_COLOR,
                headerShown: false
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    tabBarLabel: 'Задачи',
                    tabBarIcon: (options: ITabBarIcon) => (
                        <Ionicons name="ios-list" size={24} color={options.color}/>
                    )
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Аккаунт',
                    tabBarIcon: (options: ITabBarIcon) => (
                        <FontAwesome5 name="user" size={24} color={options.color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};
