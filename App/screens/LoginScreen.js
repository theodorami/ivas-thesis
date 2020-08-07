import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm";
import AppSubmitButton from "../components/AppSubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="E-Mail Adresse"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Dein Passwort"
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.buttonsContainer}>
          <AppButton title="zurück" color="secondary" />
          <AppSubmitButton title="einloggen" />
        </View>
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  buttonsContainer: {
    width: "48.5%",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
});

export default LoginScreen;
