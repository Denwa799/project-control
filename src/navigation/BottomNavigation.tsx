import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {THEME} from '../theme';
import {Ionicons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ITabBarIcon } from './types';
import { MainScreen } from '../screens/Main';
import { ProfileScreen } from '../screens/Profile';
import { TaskNavigation } from './TaskNavigation';

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {

    return (
        <Tab.Navigator
            shifting={true}
            barStyle={{backgroundColor: THEME.SECOND_COLOR}}
        >
            <Tab.Screen
                name="MainScreen"
                component={TaskNavigation}
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
                    tabBarLabel: 'Профиль',
                    tabBarIcon: (options: ITabBarIcon) => (
                        <FontAwesome5 name="user" size={22} color={options.color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};
