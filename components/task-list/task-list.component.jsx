import React, { useEffect, useState } from "react";

import { FlatList, RefreshControl } from "react-native";
import { TaskItem } from "../task-item/task-item.component";
import { getTasks, deleteTask } from "../../api/api";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleOnDeleteTask = async (id) => {
    await deleteTask(id);
    await fetchTasks();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleOnDeleteTask={handleOnDeleteTask} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchTasks();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={style.container}
      data={tasks}
      keyExtractor={(item) => item.id + " "}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const style = {
  container: { width: "100%" },
};
