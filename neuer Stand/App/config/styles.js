// Platform Unterscheidungen hier einfügen.

import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.primary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
