import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "../components/Text/AppText";
import DetailTabComponent from "../components/DetailScreenTab/DetailTabComponent";
import AppScreen from "../components/AppScreen";

function DetailsScreen() {
  return (
    <AppScreen style={styles.view}>
      <View style={styles.vieweins}>
        <AppText style={styles.title}>
          Dem Außenmmodul der Basis eins, können folgende Werte entnommen
          werden.
        </AppText>
      </View>
      <DetailTabComponent />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.light,
  },
  vieweins: {
    height: "5%",
    justifyContent: "center",
    padding: "4%",
  },
  title: {
    color: colors.black,
    //padding: "4%",
  },
  image: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 5,
    marginRight: 5,
    alignSelf: "flex-end",
  },
});

export default DetailsScreen;
