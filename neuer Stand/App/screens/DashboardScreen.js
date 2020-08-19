import React from "react";
import { View, StyleSheet } from "react-native";

import routes from "../navigation/routes";

import colors from "../config/colors";
import BigText from "../components/Text/BigText";

import TabComponent from "../components/DashboardTabs/TabComponent";
import IvasMenuButton from "../navigation/ivasMenuButton";

function DashboardScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <View style={styles.vieweins}>
        <BigText style={styles.title}>
          Hallo David, Hallo Gabor, Willkommen bei ivas!
        </BigText>
      </View>
      <TabComponent navigation={navigation} />
      <IvasMenuButton onPress={() => navigation.navigate(routes.MENU)} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    //backgroundColor: colors.primary,
    flex: 1,
    backgroundColor: colors.light,
  },
  vieweins: {
    height: "20%",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    color: colors.third,
  },
});

export default DashboardScreen;
