import React from "react";

import { Layout } from "../components/layout/layout.component";
import { TaskList } from "../components/task-list/task-list.component";

export const HomeScreen = () => {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
};
