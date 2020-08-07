import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <LinearGradient // Button Linear Gradient
      style={styles.button}
      colors={[colors.secondary, colors.third]}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginRight: 10,
    marginTop: 20,
    borderColor: colors.black,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
});

export default AppButton;
