import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TeamScreen } from "../screens/Main/Team";
import { MainScreen } from "../screens/Main";
import { ProjectScreen } from "../screens/Main/Team/Project";

const Stack = createNativeStackNavigator();

export const TaskNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Teams' component={MainScreen}/>
      <Stack.Screen name='Team' component={TeamScreen}/>
      <Stack.Screen name='Project' component={ProjectScreen}/>
    </Stack.Navigator>
  );
};
