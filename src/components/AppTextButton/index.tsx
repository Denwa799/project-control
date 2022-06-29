import React, { FC } from "react";
import { THEME } from "../../theme";
import { Button } from "react-native-paper";
import { IAppTextButton } from "./types";

export const AppTextButton: FC<IAppTextButton> = ({children, onPress}) => {
  return <Button color={THEME.MAIN_COLOR} onPress={onPress}>{children}</Button>
};
