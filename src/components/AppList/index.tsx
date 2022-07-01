import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { AppCard } from "../AppCard";
import { IAppList } from "./types";

export const AppList: FC<IAppList> = ({data, onOpen, style}) => {
  return (
    <View>
      <FlatList
        data={data}
        style={style}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => <AppCard item={item} onOpen={onOpen}/>}
      />
    </View>
  );
};
