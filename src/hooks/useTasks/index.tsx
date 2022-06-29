// import React, { useEffect, useState } from "react";
// import { ITask } from "../../models/ITask";
// import { collection, collectionGroup, limit, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
// import { db } from "../../firebase";
// import { ITeam } from "../../models/ITeam";
// import { Alert } from "react-native";
// import { IProject } from "../../models/IProject";
//
// export const useTasks = (teamId: string, projectId: string) => {
//   const [newTeams, setNewTeams] = useState<ITeam[]>([]);
//
//   const [tasks, setTasks] = useState<ITask[]>([]);
//
//   const [isLoading, setIsLoading] = useState(true);
//
//   const teamsRef = collection(db, "teams");
//   const newTeamsRef = collectionGroup(db, "newTeams");
//   // const newTeamsRef = collection(db, "newTeams/oQ2T1nQ0dULpJlDCO0Z2/newProjects/rdeRAXzFkClbGlss7sbt/newTasks");
//
//   const newQueryRef = query(newTeamsRef);
//   const teamQuery = query(teamsRef, where("_id", "==", teamId), limit(1));
//
//   useEffect(() => onSnapshot(
//     newQueryRef,
//     snapshot => {
//
//       setNewTeams(snapshot.docs.map(doc => ({
//         _id: doc.id,
//         ...doc.data()
//       } as ITeam)));
//
//       // const team = snapshot.docs.map(doc => ({
//       //   ...doc.data()
//       // }))[0];
//       //
//       // const project = team.projects.find((item: IProject) => item._id === projectId)
//
//       //console.log('Project:', project);
//       setIsLoading(false);
//     },
//     error => {
//       Alert.alert("Ошибка загрузки списка");
//     }
//   ), []);
//
//   return { newTeams, isLoading };
// };