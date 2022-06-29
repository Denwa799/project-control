import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { AppList } from "../../components/AppList";
import { DATA } from "../../data";
import { StackNavigationProp } from "@react-navigation/stack";
import { TeamScreenNavigateType } from "./types";
import { ITeam } from "../../models/ITeam";

export const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<TeamScreenNavigateType>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Команды'
    })
  }, []);

  const openTeamHandler = (team: ITeam) => {
    navigation.navigate("Team", { projects: team.projects });
  };

  return (
    <View>
      <AppList data={DATA} onOpen={openTeamHandler}/>
    </View>
  );
};
