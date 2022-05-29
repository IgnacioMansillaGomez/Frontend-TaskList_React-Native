import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { HomeScreen } from "./screens/HomeScreen";
import { TaskFormScreen } from "./screens/TaskFormScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Task Management",
            headerStyle: { backgroundColor: "#65499cdb" },
            headerTitleStyle: { color: "#ffff" },
            headerTitleAlign: "left",
            headerRight: () => (
              <TouchableOpacity>
                <AntDesign
                  name="plussquareo"
                  size={28}
                  style={{ paddingRight: 10, color: "#ffffff" }}
                  onPress={() => navigation.navigate("TaskForm")}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskFormScreen}
          options={{
            title: "New Task",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#65499cdb" },
            headerTitleStyle: { color: "#ffff" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
