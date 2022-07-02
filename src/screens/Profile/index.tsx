import React, { FC } from "react";
import { View, Text } from "react-native";
import { AppButton } from "../../components/AppButton";
import { AppLoader } from "../../components/AppLoader";
import { AppPositionContainer } from "../../components/AppPositionContainer";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import { styles } from "./styles";

export const ProfileScreen: FC = () => {
  const { logout } = useAuth();
  const { name, isLoading } = useProfile();

  return isLoading
    ? <AppPositionContainer isCenter>
      <AppLoader/>
    </AppPositionContainer>
    : (
      <View>
        <Text style={styles.name}>{name}</Text>
        <AppButton onPress={logout} title="Выйти"/>
      </View>
    );
};
