import { View, Text } from "react-native";
import React from "react";

export const TaskItem = ({ task }) => {
  return (
    <View>
      <Text>Title: {task.title}</Text>
      <Text>Description: {task.description}</Text>
    </View>
  );
};
