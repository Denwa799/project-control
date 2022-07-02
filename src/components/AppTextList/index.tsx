import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { AppTextCard } from "../AppTextCard";
import { IAppTextList } from "./types";

export const AppTextList: FC<IAppTextList> = (
  {
    data,
    style,
    onDelete,
    onChange
  }) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style}
        data={data}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <AppTextCard
            _id={item._id}
            text={item.text}
            responsible={item.responsible}
            status={item.status}
            onDelete={onDelete}
            onChange={onChange}
          />
        )}
      />
    </View>
  );
};
