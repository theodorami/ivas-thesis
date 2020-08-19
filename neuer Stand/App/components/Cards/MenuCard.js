import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import AppText from "../Text/AppText";
import SmalText from "../Text/SmalText";

function MenuCard({ title, subTitle, image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.detailsContainer}>
        <Image style={styles.image} source={image} />
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <SmalText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </SmalText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 110,
    width: "46%",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: "4%",
    marginEnd: "4%",
    //paddingEnd: "4%",
    //overflow: "hidden",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  detailsContainer: {
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    //alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  subTitle: {
    marginTop: 2,
    color: colors.black,
    alignSelf: "center",
  },
  title: {
    color: colors.secondary,
    alignSelf: "center",
  },
});

export default MenuCard;
