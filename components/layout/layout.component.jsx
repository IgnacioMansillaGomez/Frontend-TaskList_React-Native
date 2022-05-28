import React from "react";
import { View, StyleSheet } from "react-native";

export const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9214926b",
    alignItems: "center",
    padding: 20,
  },
});
