import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { Layout } from "../components/layout/layout.component";
import { getTasks } from "../api/api";
import { TaskList } from "../components/task-list/task-list.component";

export const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  );
};
