import React, { FC, useCallback } from "react";
import { styles } from "./styles";
import { AppRadioBtn } from "../../../../components/AppRadioBtn";
import { View } from "react-native";
import { IRadioBtns } from "./types";

export const RadioBtns: FC<IRadioBtns> = ({activeRadioBtn, setActiveRadioBtn}) => {
  const doneHandler = useCallback(() => {
    setActiveRadioBtn("done");
  }, [activeRadioBtn]);

  const inProgressHandler = useCallback(() => {
    setActiveRadioBtn("inProgress");
  }, [activeRadioBtn]);

  const notCompletedHandler = useCallback(() => {
    setActiveRadioBtn("notCompleted");
  }, [activeRadioBtn]);

  return (
    <View style={styles.radioBtns}>
      <AppRadioBtn
        text="Готово"
        isActive={activeRadioBtn === "done"}
        onPress={doneHandler}
        style={styles.radioBtn}
      />
      <AppRadioBtn
        text="В процессе"
        isActive={activeRadioBtn === "inProgress"}
        onPress={inProgressHandler}
        style={styles.radioBtn}
      />
      <AppRadioBtn
        text="Не начато"
        isActive={activeRadioBtn === "notCompleted"}
        onPress={notCompletedHandler}
        style={styles.radioBtn}
      />
    </View>
  );
};
