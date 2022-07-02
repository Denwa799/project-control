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
import { AppPositionContainer } from "../../../components/AppPositionContainer";

export const TeamScreen: FC<ITeamScreen> = ({ route: { params } }) => {
  const navigation = useNavigation<StackNavigationProp<ProjectScreenNavigateType>>();
  const [projectId, setProjectId] = useState("");
  const { teamId } = params;
  const [name, setName] = useState("");

  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [modalChangeVisible, setModalChangeVisible] = useState(false);
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false);

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

  const deleteIconHandler = useCallback((_id: string) => {
    setProjectId(_id);
    setDialogDeleteVisible(true);
  }, [projectId]);

  const changeIconHandler = useCallback((_id: string, name: string) => {
    setProjectId(_id);
    setModalChangeVisible(true);
    setName(name);
  }, [projectId, name]);

  return isLoading
    ? <AppPositionContainer isCenter>
      <AppLoader/>
    </AppPositionContainer>
    : (
      <View>
        <AppList
          data={projects}
          onOpen={openProjectHandler}
          style={styles.list}
          onDelete={deleteIconHandler}
          onChange={changeIconHandler}
        />
        <AppContainer style={styles.container}>
          <AppButton onPress={showCreateModal} title="Создать проект"/>
        </AppContainer>
        <Modals
          modalCreateVisible={modalCreateVisible}
          setModalCreateVisible={setModalCreateVisible}
          teamId={teamId}
          projectId={projectId}
          dialogDeleteVisible={dialogDeleteVisible}
          setDialogDeleteVisible={setDialogDeleteVisible}
          name={name}
          modalChangeVisible={modalChangeVisible}
          setModalChangeVisible={setModalChangeVisible}
        />
      </View>
    );
};
