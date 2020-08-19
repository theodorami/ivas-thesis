import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import AppText from "../Text/AppText";
import SmalText from "../Text/SmalText";
import colors from "../../config/colors";

function DetailsCard({
  titleTwo,
  subtitleTwo,
  imageTwo,
  titleOne,
  subtitleOne,
  imageOne,
  title,
  subtitle,
  image,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.holder}>
          <AppText style={styles.title}> {title} </AppText>
          <SmalText style={styles.subtitle}> {subtitle} </SmalText>
        </View>
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={imageOne}></Image>
        <View style={styles.holder}>
          <AppText style={styles.title}> {titleOne} </AppText>
          <SmalText style={styles.subtitle}> {subtitleOne} </SmalText>
        </View>
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={imageTwo}></Image>
        <View style={styles.holder}>
          <AppText style={styles.title}> {titleTwo} </AppText>
          <SmalText style={styles.subtitle}> {subtitleTwo} </SmalText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    width: "46%",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginStart: "4%",
    marginBottom: "4%",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    backgroundColor: colors.white,
    //flex: 2,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: "4%",
  },
  holder: {
    flexDirection: "column",
    justifyContent: "center",
  },
  subtitle: {
    color: colors.primary,
  },
  title: {
    color: colors.third,
    fontWeight: "bold",
  },
});

export default DetailsCard;
