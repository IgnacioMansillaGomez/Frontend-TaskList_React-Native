import { TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { createTask } from "../api/api";

import { Layout } from "../components/layout/layout.component";

export const TaskFormScreen = ({ navigation }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleOnChangeText = (name, value) => {
    setTask({ ...task, [name]: value });
  };

  const handleOnSubmit = () => {
    if (task.title !== "") {
      createTask(task);
      navigation.navigate("Home");
    }
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Title..."
        placeholderTextColor="#546574"
        maxLength={50}
        onChangeText={(text) => handleOnChangeText("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description..."
        placeholderTextColor="#546574"
        multiline={true}
        numberOfLines={10}
        maxLength={100}
        onChangeText={(text) => handleOnChangeText("description", text)}
      />
      <TouchableOpacity style={styles.buttonOnSave} onPress={handleOnSubmit}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
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
});
