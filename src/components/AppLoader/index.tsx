import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { THEME } from "../../theme";

export const AppLoader: FC = () => <ActivityIndicator size={50} color={THEME.MAIN_COLOR}/>