import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";

function AppText({ children, style }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: colors.secondary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
