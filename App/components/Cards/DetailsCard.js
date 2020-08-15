import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "../Text/AppText";
import colors from "../../config/colors";

function DetailsCard({ title, subtitle, image, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image style={styles.image} source={image}></Image>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </AppText>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={image}></Image>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </AppText>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={image}></Image>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    //margin: "4%",
    width: "100%",
    marginStart: "6%",
    marginHorizontal: "30%",
  },
  row: {
    flexDirection: "row",
    backgroundColor: colors.white,
    flex: 2,
    padding: 20,

    width: "100%",
    //  justifyContent: "center",
    alignItems: "center",
    //alignContent: "space-around",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: colors.danger,
    marginRight: "10%",
  },
  subtitle: {
    fontStyle: "italic",
  },
});

export default DetailsCard;
