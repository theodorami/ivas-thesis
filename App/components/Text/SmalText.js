import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";

function AppText({ children, style }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
