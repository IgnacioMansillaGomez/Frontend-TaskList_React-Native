import { TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createTask, updateTask, getTasks } from "../api/api";

import { Layout } from "../components/layout/layout.component";

export const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [edit, setEdit] = useState(false);

  const handleOnChangeText = (name, value) => {
    setTask({ ...task, [name]: value });
  };

  const handleOnSubmit = async () => {
    if (!edit) {
      await createTask(task);
    } else {
      await updateTask(route.params.id, task);
    }
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Updating my task" });
      setEdit(true);

      (async () => {
        const task = await getTasks(route.params.id);
        setTask({ title: task.title, description: task.description });
      })();
    }
  });

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Title..."
        placeholderTextColor="#546574"
        maxLength={50}
        value={task.title}
        onChangeText={(text) => handleOnChangeText("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description..."
        placeholderTextColor="#546574"
        multiline={true}
        numberOfLines={10}
        maxLength={100}
        value={task.description}
        onChangeText={(text) => handleOnChangeText("description", text)}
      />

      {!edit ? (
        <TouchableOpacity style={styles.buttonOnSave} onPress={handleOnSubmit}>
          <Text style={styles.buttonText}>Create Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonOnUpdate}
          onPress={handleOnSubmit}
        >
          <Text style={styles.buttonText}>Update Task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginVertical: 8,
    fontSize: 16,
    borderColor: "#ac108a",
    borderWidth: 1,
    height: 45,
    color: "#fff",
    textAlign: "center",
    padding: 6,
  },
  buttonOnSave: {
    width: "90%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#65499cdb",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonOnUpdate: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#423a51db",
    width: "90%",
  },
});
