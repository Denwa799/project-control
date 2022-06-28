import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { BottomNavigation } from "./BottomNavigation";
import { AuthScreen } from "../screens/Auth";

const Stack = createNativeStackNavigator();

export const AuthNavigation: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name='Main' component={BottomNavigation}/>
        </>
      ) : (
        <Stack.Screen name='Auth' component={AuthScreen}/>)
      }
    </Stack.Navigator>
  );
};
