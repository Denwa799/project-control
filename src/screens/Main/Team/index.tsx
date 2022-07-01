import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { ITeamScreen, ProjectScreenNavigateType } from "./types";
import { AppList } from "../../../components/AppList";
import { IProject } from "../../../models/IProject";
import { StackNavigationProp } from "@react-navigation/stack";
import { useProjects } from "../../../hooks/useProjects";
import { styles } from "./styles";
import { AppLoader } from "../../../components/AppLoader";
import { AppButton } from "../../../components/AppButton";
import { AppContainer } from "../../../layouts/AppContainer";
import { Modals } from "./Modals";

export const TeamScreen: FC<ITeamScreen> = ({ route: { params } }) => {
  const navigation = useNavigation<StackNavigationProp<ProjectScreenNavigateType>>();
  const { teamId } = params;
  const [modalCreateVisible, setModalCreateVisible] = useState(false);

  const { projects, isLoading } = useProjects(teamId);

  useEffect(() => {
    navigation.setOptions({
      title: "Проекты"
    });
  }, []);

  const openProjectHandler = (project: IProject) => {
    navigation.navigate("Project", { teamId, projectId: project._id });
  };

  const showCreateModal = useCallback(() => {
    setModalCreateVisible(true);
  }, []);

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    : (
      <View>
        <AppList
          data={projects}
          onOpen={openProjectHandler}
          style={styles.list}
        />
        <AppContainer style={styles.container}>
          <AppButton onPress={showCreateModal} title="Создать проект"/>
        </AppContainer>
        <Modals
          modalCreateVisible={modalCreateVisible}
          setModalCreateVisible={setModalCreateVisible}
          teamId={teamId}
        />
      </View>
    );
};
