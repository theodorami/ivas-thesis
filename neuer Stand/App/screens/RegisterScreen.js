import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm";
import BigText from "../components/Text/BigText";
import AppButton from "../components/AppButton";

import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Registrieren.png")}
    >
      <BigText style={styles.text}>
        Registriere dich um mit ivas loszulegen!{" "}
      </BigText>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Dein Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Deine E-Mail Adresse"
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
            title="Registrieren"
            onPress={() => navigation.navigate(routes.WELCOME)}
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

export default RegisterScreen;
