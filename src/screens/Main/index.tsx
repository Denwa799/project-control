import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { AppList } from "../../components/AppList";
import { StackNavigationProp } from "@react-navigation/stack";
import { TeamScreenNavigateType } from "./types";
import { ITeam } from "../../models/ITeam";
import { useTeams } from "../../hooks/useTeams";
import { AppLoader } from "../../components/AppLoader";
import { styles } from "./styles";
import { AppButton } from "../../components/AppButton";
import { AppContainer } from "../../layouts/AppContainer";
import { Modals } from "./Modals";

export const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<TeamScreenNavigateType>>();
  const { teams, isLoading } = useTeams();
  const [teamId, setTeamId] = useState("");
  const [name, setName] = useState("");

  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [modalChangeVisible, setModalChangeVisible] = useState(false);
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: "Команды"
    });
  }, []);

  const openTeamHandler = (team: ITeam) => {
    navigation.navigate("Team", { teamId: team._id });
  };

  const showCreateModal = useCallback(() => {
    setModalCreateVisible(true);
  }, []);

  const deleteIconHandler = useCallback((_id: string) => {
    setTeamId(_id);
    setDialogDeleteVisible(true);
  }, [teamId]);

  const changeIconHandler = useCallback((_id: string, name: string) => {
    setTeamId(_id);
    setModalChangeVisible(true);
    setName(name);
  }, [teamId, name]);

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    : (
    <View>
      <AppList
        data={teams}
        onOpen={openTeamHandler}
        style={styles.list}
        onDelete={deleteIconHandler}
        onChange={changeIconHandler}
      />
      <AppContainer style={styles.container}>
        <AppButton onPress={showCreateModal} title="Создать команду"/>
      </AppContainer>
      <Modals
        modalCreateVisible={modalCreateVisible}
        setModalCreateVisible={setModalCreateVisible}
        teamId={teamId}
        dialogDeleteVisible={dialogDeleteVisible}
        setDialogDeleteVisible={setDialogDeleteVisible}
        name={name}
        modalChangeVisible={modalChangeVisible}
        setModalChangeVisible={setModalChangeVisible}
      />
    </View>
  );
};
