import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SmalText from "../Text/SmalText";
import AppText from "../Text/AppText";
import colors from "../../config/colors";

function ListItem({ title, subtitle }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.row}>
        <View style={styles.holder}>
          <AppText style={styles.title}> {title} </AppText>
          <SmalText style={styles.subtitle}> {subtitle} </SmalText>
        </View>
        <MaterialCommunityIcons
          styles={styles.image}
          color={colors.third}
          name="chevron-down"
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.light,
  },
  row: {
    flexDirection: "row",
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  holder: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  image: {
    alignSelf: "flex-end",
  },
  subtitle: {
    marginTop: 5,
    color: colors.black,
  },
  title: {
    color: colors.third,
  },
});

export default ListItem;
