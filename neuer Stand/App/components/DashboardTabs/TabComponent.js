import * as React from "react";
import { Dimensions, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import AppScreen from "../AppScreen";
import AppText from "../Text/AppText";
import BasisEins from "./BasisEins";
import BasisZwei from "./BasisZwei";

const SecondRoute = () => <BasisZwei />;

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
        navigationState={this.state}
        renderScene={SceneMap({
          first: () => <BasisEins navigation={this.props.navigation} />,
          second: SecondRoute,
        })}
        renderPlatzhalter={this._renderPlatzhalter}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}
