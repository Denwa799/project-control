import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { AppList } from "../../components/AppList";
import { StackNavigationProp } from "@react-navigation/stack";
import { TeamScreenNavigateType } from "./types";
import { ITeam } from "../../models/ITeam";
import { useTeams } from "../../hooks/useTeams";

export const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<TeamScreenNavigateType>>();
  const {teams, isLoading} = useTeams();

  useEffect(() => {
    navigation.setOptions({
      title: 'Команды'
    })
  }, []);

  const openTeamHandler = (team: ITeam) => {
    navigation.navigate("Team", { teamId: team._id , projects: team.projects });
  };

  return (
    <View>
      <AppList data={teams} onOpen={openTeamHandler}/>
    </View>
  );
};
