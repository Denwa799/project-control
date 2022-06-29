import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Alert } from "react-native";
import { IProject } from "../../models/IProject";

export const useProjects = (teamId: string) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const projectsRef = collection(db, `teams/${teamId}/projects`);
    const queryRef = query(projectsRef);

    onSnapshot(queryRef, snapshot => {
        setProjects(snapshot.docs.map(doc => ({
          _id: doc.id,
          ...doc.data()
        } as IProject)));
        setIsLoading(false);
      },
      error => {
        Alert.alert("Ошибка загрузки списка");
      });
  }, []);

  return { projects, isLoading };
};
