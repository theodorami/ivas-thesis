import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

//import routes from "../navigation/routes";

function IvasMenuButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        source={require("../assets/MenüButton.png")}
        style={styles.image}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 5,
    marginStart: "80%",
    //alignSelf: "flex-end",
  },
});

export default IvasMenuButton;
