import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TabComponent from "../components/DashboardTabs/TabComponent";

import colors from "../config/colors";
import BigText from "../components/Text/BigText";

function DashboardScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.vieweins}>
        <BigText style={styles.title}> Hallo Tino!!!!!! </BigText>
      </View>
      <TabComponent />
      <TouchableOpacity>
        <Image
          source={require("../assets/MenüButton.png")}
          style={styles.image}
        />
      </TouchableOpacity>
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
    color: colors.third,
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

export default DashboardScreen;
