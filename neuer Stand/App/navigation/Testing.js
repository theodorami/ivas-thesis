import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    return fetch("http://ttthesis.herokuapp.com/api/all")
      .then((resonse) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.weather,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let weather = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} styles={styles.item}>
            <Text>{val.temperature}</Text>
          </View>
        );
      });

      return (
        <View styles={styles.container}>
          <Text> {weather} </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
