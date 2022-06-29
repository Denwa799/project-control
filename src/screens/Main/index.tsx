import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { AppList } from "../../components/AppList";
import { StackNavigationProp } from "@react-navigation/stack";
import { TeamScreenNavigateType } from "./types";
import { ITeam } from "../../models/ITeam";
import { useTeams } from "../../hooks/useTeams";
import { AppLoader } from "../../components/AppLoader";
import { styles } from "./styles";

export const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<TeamScreenNavigateType>>();
  const { teams, isLoading } = useTeams();

  useEffect(() => {
    navigation.setOptions({
      title: "Команды"
    });
  }, []);

  const openTeamHandler = (team: ITeam) => {
    navigation.navigate("Team", { teamId: team._id });
  };

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    : (
    <View>
      <AppList data={teams} onOpen={openTeamHandler}/>
    </View>
  );
};
