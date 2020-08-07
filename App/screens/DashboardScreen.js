import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/AppScreen";

const Inhalt = [
  {
    id: 1,
    title: "Modul Wildkamera",
    subtitle: "live einsehen",
    image: require("../assets/placeholder-2.jpg"),
  },
  {
    id: 2,
    title: "Modul Wetter",
    subtitle: "22 C°",
    image: require("../assets/placeholder.jpg"),
  },
];

function DashboardScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Inhalt}
        keyExtractor={(Inhalt) => Inhalt.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subtitle}
            image={item.image}
            onPress={() => console.log("pressed")}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default DashboardScreen;
