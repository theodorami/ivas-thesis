import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import MenuCardContainer from "../components/MenuCardContainer";
import BigText from "../components/Text/BigText";
import colors from "../config/colors";

import routes from "../navigation/routes";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.modalBackground}>
      <SafeAreaView style={styles.modalContent}>
        <View style={styles.iconBar}>
          <AntDesign
            style={{ color: colors.third, alignSelf: "flex-end" }}
            name="logout"
            size={20}
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
          <MaterialIcons
            style={{ alignSelf: "flex-end" }}
            name="close"
            size={24}
            onPress={() => navigation.navigate(routes.DASHBOARD)}
          />
        </View>
        <View style={styles.rowone}>
          <BigText>
            Du befindest dich im Menü. Bitte wähle aus folgenden Möglichkeiten
            aus.
          </BigText>
        </View>
        <View style={styles.rowtwo}>
          <MenuCardContainer />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    //width: "90%",
    margin: 10,
    borderRadius: 20,
    backgroundColor: colors.light,
    marginTop: 40,
    marginBottom: 15,
  },
  modalBackground: {
    backgroundColor: "rgba(38, 89, 2, 0.25)",
    flex: 1,
  },
  iconBar: {
    padding: "4%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowone: {
    height: "20%",
    justifyContent: "center",
  },
  rowtwo: {
    backgroundColor: colors.third,
    height: "40%",
    marginStart: "4%",
  },
});

export default MenuScreen;
