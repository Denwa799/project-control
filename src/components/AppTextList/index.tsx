import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { AppTextCard } from "../AppTextCard";
import { IAppTextList } from "./types";

export const AppTextList: FC<IAppTextList> = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <AppTextCard text={item.text} responsible={item.responsible} status={item.status}/>}
      />
    </View>
  );
};
