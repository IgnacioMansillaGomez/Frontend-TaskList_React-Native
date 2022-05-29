import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

export const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7a4ff",
    alignItems: "center",
    padding: 20,
  },
});
