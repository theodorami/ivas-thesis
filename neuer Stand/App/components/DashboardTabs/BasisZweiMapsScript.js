import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../Cards/card";
import colors from "../../config/colors";
import AppScreen from "../AppScreen";
import MapsScript from "../MapsScript";
import CardWeather from "../Cards/CardWeather";

const Inhalt = [
  {
    id: 1,
    type: "image",
    title: "Modul Wildkamera",
    subtitle: "live einsehen",
    content: require("../../assets/placeholder.jpg"),
  },
  {
    id: 2,
    type: "map",
    title: "Basis eins",
    subtitle: "lat:52.503526 lon:13.410239",
    content: MapsScript,
  },
];

function BasisZweiMapsScript() {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={Inhalt}
          numColumns={2}
          keyExtractor={(Inhalt) => Inhalt.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              style={styles.cards}
              subTitle={item.subtitle}
              type={item.type}
              content={item.content}
              onPress={() => console.log("pressed")}
            />
          )}
        />
        <View style={styles.new}>
          <CardWeather />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    padding: 10,
    backgroundColor: colors.light,
    marginEnd: 6,
    flex: 1,
  },
  container: {
    //flex: 1,
    //justifyContent: "space-between",
  },
  new: {
    flexDirection: "row",
    marginTop: "4%",
    marginBottom: 10,
  },
});

export default BasisZweiMapsScript;
