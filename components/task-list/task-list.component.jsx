import React from "react";
import { View, Text, FlatList } from "react-native";
import { TaskItem } from "../task-item/task-item.component";

export const TaskList = ({ tasks }) => {
  const style = {
    list: {
      backgroundColor: "#c34747",
      textAlign: "center",
    },
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} />;
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id + " "}
      renderItem={renderItem}
    />
  );
};
