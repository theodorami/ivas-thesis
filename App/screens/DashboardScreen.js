import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import TabComponent from "../components/Tabs/TabComponent";
//import AppText from "../components/AppText";

import colors from "../config/colors";
import BigText from "../components/Text/BigText";

function DashboardScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.vieweins}>
        <BigText> Hallo Max, </BigText>
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
});

export default DashboardScreen;
