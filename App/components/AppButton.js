import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  if (color === "primary") {
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
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonlight,
          { backgroundColor: colors[color] },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, styles.textlight]}>{title} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginTop: 20,
    marginRight: 10,
  },
  buttonlight: {
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  textlight: {
    color: colors.secondary,
  },
});

export default AppButton;
