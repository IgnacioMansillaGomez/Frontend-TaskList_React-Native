import React, { useEffect, useState } from "react";

import { FlatList } from "react-native";
import { TaskItem } from "../task-item/task-item.component";
import { getTasks } from "../../api/api";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderItem = ({ item }) => {
    return <TaskItem task={item} />;
  };

  return (
    <FlatList
      style={style.container}
      data={tasks}
      keyExtractor={(item) => item.id + " "}
      renderItem={renderItem}
    />
  );
};

const style = {
  container: { width: "100%" },
};
