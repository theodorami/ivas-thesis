// Platform Unterscheidungen hier einfügen.
// ./config/colors sind hier eingefügt. Nutze ab jetzt import defaultStyles für styles und colors

import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
