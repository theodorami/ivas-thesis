import React from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import Card from "./card";
import colors from "../config/colors";
import AppScreen from "./AppScreen";

const Inhalt = [
  {
    id: 1,
    title: "Modul Wildkamera",
    subtitle: "live einsehen",
    image: require("../assets/placeholder-2.jpg"),
  },
  {
    id: 2,
    title: "Modul Wetter und Mod",
    subtitle: "22 C°",
    image: require("../assets/placeholder-2.jpg"),
  },
  {
    id: 3,
    title: "Wetterdaten",
    subtitle: "22 C°",
    image: require("../assets/placeholder.jpg"),
  },
];

function CardContainer() {
  return (
    <ScrollView>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <FlatList
            data={Inhalt}
            numColumns={2}
            //ItemSeparatorComponent={separators.unhighlight}
            keyExtractor={(Inhalt) => Inhalt.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                style={styles.cards}
                subTitle={item.subtitle}
                image={item.image}
                onPress={() => console.log("pressed")}
              />
            )}
          />
        </View>
      </AppScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    //padding: 20,
    //width: "100%",
    backgroundColor: colors.light,
    //display: "flex",
    //flex: 1,
    //flexDirection: "row",

    //alignItems: "row",
    //justifyContent: "center",
  },
  container: {
    // flexDirection: "row",
    //justifyContent: "flex-start",
    //alignContent: "flex-start",
    //width: "100%",
    //flexWrap: "wrap",
    // width: "100%",
    flexDirection: "row",
    //margin: 5,

    //width: "30%",
    justifyContent: "space-between",
  },
  cards: {
    //width: "30%",
    //padding: 5,
    //justifyContent: "space-between",
  },
});

export default CardContainer;
