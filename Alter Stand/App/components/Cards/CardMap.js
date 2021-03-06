import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

import { WebView } from "react-native-webview";

import MapsScript from "../MapsScript";

function CardMap() {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <WebView source={{ html: MapsScript }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            Standort:
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            lon und lat
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    marginBottom: 70,
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    width: "46%",
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
export default CardMap;
