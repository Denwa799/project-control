import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { AuthNavigation } from './AuthNavigation';

export const AppNavigation: FC = () => {
    return (
        <NavigationContainer>
            <AuthNavigation/>
        </NavigationContainer>
    );
}