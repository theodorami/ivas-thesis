import * as React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ZurzeitDummy from "./ZurzeitDummy";

import Statistik from "./Statistik";

const FirstRoute = () => <ZurzeitDummy />;

const SecondRoute = () => <Statistik />;

const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

export default class DetailTabComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Zurzeit" },
      { key: "second", title: "Statistik" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
