import React from "react";
import {
  View,
  StyleSheet,
  Image,
  WebView,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "../Text/AppText";
import colors from "../../config/colors";
import MapsScript from "../MapsScript";
import SmalText from "../Text/SmalText";

function Card({ title, subTitle, content, onPress, type = "image" }) {
  if (type === "image") {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <Image style={styles.image} source={content} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            <SmalText style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </SmalText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else if (type === "map") {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <WebView source={{ html: content }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            <SmalText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </SmalText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    height: 185,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginStart: "4%",
    marginBottom: "2%",
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

export default Card;
