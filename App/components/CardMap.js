import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";

import { WebView } from "react-native-webview";

import MapsScript from "../components/MapsScript";

function CardMap() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <WebView source={{ html: MapsScript }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            Hi
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            lol
          </Text>
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
    flex: 2,
    height: 200,
    backgroundColor: "#f6f6f6",
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
