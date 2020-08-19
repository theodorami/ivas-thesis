import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TextComponent,
} from "react-native";

import AppText from "../Text/AppText";
import SmalText from "../Text/SmalText";
import colors from "../../config/colors";

function PillerCard({ uv, moisture, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../../assets/icons/temp.png")}
          />
          <View style={styles.holder}>
            <SmalText style={styles.title}> {moisture} C° </SmalText>
            <SmalText style={styles.subtitle}> Aktuell </SmalText>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../../assets/icons/Feuchtigkeit.png")}
          />
          <View style={styles.holder}>
            <SmalText style={styles.title}> {uv} % </SmalText>
            <SmalText style={styles.subtitle}> Luftfeuchte </SmalText>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../../assets/icons/Bodenfeuchtigkeit.png")}
          />
          <View style={styles.holder}>
            <SmalText style={styles.title}> % </SmalText>
            <SmalText style={styles.subtitle}> Bodenfeuchte </SmalText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    marginBottom: 20,
    width: "46%",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginStart: "4%",
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
    flex: 2,
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
  },
});

export default PillerCard;
