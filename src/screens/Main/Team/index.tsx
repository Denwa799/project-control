import { useNavigation } from "@react-navigation/native";
import React, { FC, useEffect } from "react";
import { View } from "react-native";
import { ITeamScreen, ProjectScreenNavigateType } from "./types";
import { AppList } from "../../../components/AppList";
import { IProject } from "../../../models/IProject";
import { StackNavigationProp } from "@react-navigation/stack";

export const TeamScreen: FC<ITeamScreen> = ({route: {params}}) => {
  const navigation = useNavigation<StackNavigationProp<ProjectScreenNavigateType>>();
  const { teamId, projects } = params;

  useEffect(() => {
    navigation.setOptions({
      title: 'Проекты'
    })
  }, []);

  const openProjectHandler = (project: IProject) => {
    navigation.navigate("Project", { teamId, projectId: project._id,  tasks: project.tasks });
  };

  return (
    <View>
      <AppList data={projects} onOpen={openProjectHandler}/>
    </View>
  );
};
