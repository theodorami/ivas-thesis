import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" style={styles.test} />
        <AppButton title="Register" color="transparent" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    //blurRadius={10}
  },
  buttonsContainer: {
    margin: 10,
    padding: 10,
    marginBottom: 100,
    width: "48.5%",
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;

//<Text style={styles.tagline}> Willkommen</Text>
