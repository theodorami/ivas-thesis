import * as React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Constants } from "expo";

import colors from "../config/colors";
import AppScreen from "./AppScreen";
import AppText from "../components/AppText";
import CardContainer from "./CardContainer";
import CardMap from "./CardMap";

const FirstRoute = () => <CardContainer />;

const SecondRoute = () => <CardMap />;

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route

const PlatzHalter = ({ route }) => (
  <AppScreen>
    <AppText>Loading {route.title}…</AppText>
  </AppScreen>
);

export default class TabComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Basis Eins" },
      { key: "second", title: "Basis Zwei" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderPlatzHalter = ({ route }) => <PlatzHalter route={route} />;

  render() {
    return (
      <TabView
        lazy
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderPlatzhalter={this._renderPlatzhalter}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});
