import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getTasks, deleteTask } from "../../api/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const TaskItem = ({ task, handleOnDeleteTask }) => {
  const navigation = useNavigation();
  return (
    <View style={style.taskItemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskForm", { id: task.id })}
      >
        <Text style={style.itemTitle}>TITLE {task.title}</Text>
        <Text>{task.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOnDeleteTask(task.id)}>
        <MaterialCommunityIcons name="delete" size={26} color="#ae0a0a" />
      </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTitle: {
    color: "#ffff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
};
