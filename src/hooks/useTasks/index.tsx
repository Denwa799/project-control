import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { Alert } from "react-native";
import { ITask } from "../../models/ITask";

export const useTasks = (teamId: string, projectId: string) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const projectsRef = collection(db, `teams/${teamId}/projects/${projectId}/tasks`);
    const queryRef = query(projectsRef, orderBy("created", "asc"));

    onSnapshot(queryRef, snapshot => {
        setTasks(snapshot.docs.map(doc => ({
          _id: doc.id,
          ...doc.data()
        } as ITask)));
        setIsLoading(false);
      },
      error => {
        Alert.alert("Ошибка загрузки списка");
      });
  }, []);

  return { tasks, isLoading };
};
