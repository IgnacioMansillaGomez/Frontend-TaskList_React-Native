import { View, Text } from "react-native";
import React from "react";

export const TaskItem = ({ task }) => {
  return (
    <View style={style.taskItemContainer}>
      <Text style={style.itemTitle}>TITLE: {task.title}</Text>
      <Text>Description: {task.description}</Text>
    </View>
  );
};

const style = {
  taskItemContainer: {
    backgroundColor: "#9575cd",
    textAlign: "center",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemTitle: {
    color: "#ffff",
    fontWeight: "600",
    fontSize: 16,
  },
};
