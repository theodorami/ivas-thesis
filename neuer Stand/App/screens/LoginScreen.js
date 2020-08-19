import React from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm";
import BigText from "../components/Text/BigText";

import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/login.png")}
    >
      <BigText style={styles.text}>Logge dich ein um loszulegen! </BigText>
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
          <AppButton
            title="zurück"
            color="transparent"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
          <AppButton
            title="einloggen"
            onPress={() => navigation.navigate(routes.DASHBOARD)}
          />
        </View>
      </AppForm>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingVertical: 20,
    flex: 1,
    justifyContent: "flex-end",
    //alignItems: "center",
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 40,
  },
  buttonsContainer: {
    marginTop: 40,
    //padding: 10,
    marginBottom: 90,
    width: "48.5%",
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
});

export default LoginScreen;
