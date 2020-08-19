import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../Text/AppText";
import SmalText from "../Text/SmalText";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={this.props.onPress}
        >
          <View style={styles.text}>
            <AppText style={styles.title}>{this.props.title}</AppText>
            <SmalText style={styles.subtitle}>{this.props.subtitle}</SmalText>
          </View>

          <Icon
            name={
              this.props.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
            }
            size={30}
            color={colors.third}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.props.expanded && (
          <View style={styles.child}>
            <AppText styles={styles.childtext}>{this.props.data}</AppText>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  childtext: {
    color: colors.white,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    paddingLeft: 25,
    paddingRight: 20,
    alignItems: "center",
    backgroundColor: colors.light,
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
  text: {
    flexDirection: "column",
    // paddingTop: 5,
  },
  parentHr: {
    height: 1,
    color: colors.white,
    width: "100%",
  },
  child: {
    backgroundColor: "rgba(38, 89, 2, 0.25)",
    padding: 20,
    //color: colors.white,
  },
});
