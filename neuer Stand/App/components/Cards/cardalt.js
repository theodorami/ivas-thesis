import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "../Text/AppText";
import colors from "../../config/colors";
import SmalText from "../Text/SmalText";

function Cardalt({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
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
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    height: 185,
    width: "46%",
    backgroundColor: colors.white,
    overflow: "hidden",
    marginStart: "4%",
    //marginEnd: "2%",
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
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 115,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
    color: colors.third,
  },
  subTitle: {
    color: colors.primary,
  },
});

export default Cardalt;
