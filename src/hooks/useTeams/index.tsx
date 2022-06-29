import React, { useEffect, useState } from "react";
import { ITeam } from "../../models/ITeam";
import { db } from "../../firebase";
import { orderBy, collection, query, onSnapshot } from "firebase/firestore";
import { Alert } from "react-native";

export const useTeams = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const teamsRef = collection(db, 'teams');
  const queryRef = query(teamsRef, orderBy('name', 'asc'));

  useEffect(() => onSnapshot(
    queryRef,
    snapshot => {
      setTeams(snapshot.docs.map(doc => ({
        _id: doc.id,
        ...doc.data()
      } as ITeam)));
      setIsLoading(false);
    },
    error => {
      Alert.alert('Ошибка загрузки списка');
    }
  ), []);

  return { teams, isLoading };
};
