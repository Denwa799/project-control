import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { AppCard } from "../AppCard";
import { IAppList } from "./types";

export const AppList: FC<IAppList> = ({data, onOpen}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => <AppCard item={item} onOpen={onOpen}/>}
      />
    </View>
  );
};
