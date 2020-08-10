import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import TabComponent from "../components/TabComponent";
//import AppText from "../components/AppText";

import colors from "../config/colors";

function DashboardScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.vieweins}>
        <Text style={styles.texte}> Hallo Paul, </Text>
      </View>
      <TabComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    //backgroundColor: colors.primary,
    flex: 1,
  },
  vieweins: {
    backgroundColor: colors.light,
    height: "20%",
    justifyContent: "center",
  },
  texte: {
    fontSize: 50,
    color: colors.primary,
    marginLeft: "5%",
  },
});

export default DashboardScreen;
