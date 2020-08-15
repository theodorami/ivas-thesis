import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "./Text/AppText";
import colors from "../config/colors";

function Card({ title, subTitle, content, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={content} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    //width: "44%",
    margin: "2%",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;

import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "./Text/AppText";
import colors from "../config/colors";

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
