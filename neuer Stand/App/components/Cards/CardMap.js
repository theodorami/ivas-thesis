import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import MapsScript from "../MapsScript";
import Webview from "react-native-webview";

function CardMap() {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Webview
          sref={"Map_Ref"}
          source={{ html: MapsScript }}
          style={styles.image}
        />
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
    flex: 1,
    borderRadius: 15,
    height: 185,
    width: "46%",
    backgroundColor: colors.white,
    overflow: "hidden",
    marginTop: "4%",
    marginStart: "4%",
    marginBottom: "6%",
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
    height: 115,
  },
  title: {
    marginBottom: 7,
    color: colors.third,
  },
  subTitle: {
    color: colors.primary,
  },
});
export default CardMap;
