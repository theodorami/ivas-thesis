import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";

import AppScreen from "./AppScreen";
import DetailsCard from "./Cards/DetailsCard";

const Inhalt = [
  {
    id: 1,
    title: "25 C°",
    titleOne: "30 C°",
    titleTwo: "19 C°",
    subtitle: "Aktuell",
    subtitleOne: "Höchsttemperatur",
    subtitleTwo: "Tiefsttemperatur",
    image: require("../assets/icons/temp.png"),
    imageOne: require("../assets/icons/tempmax.png"),
    imageTwo: require("../assets/icons/tempmin.png"),
  },
];

function DetailsCardContainer() {
  return (
    <AppScreen style={styles.screen}>
      <TouchableOpacity>
        <View style={styles.container}>
          <FlatList
            data={Inhalt}
            numColumns={2}
            keyExtractor={(Inhalt) => Inhalt.id.toString()}
            renderItem={({ item }) => (
              <DetailsCard
                title={item.temp}
                title={item.title}
                titleOne={item.titleOne}
                titleTwo={item.titleTwo}
                subtitle={item.subtitle}
                subtitleOne={item.subtitleOne}
                subtitleTwo={item.subtitleTwo}
                image={item.image}
                imageOne={item.imageOne}
                imageTwo={item.imageTwo}
                onPress={() => console.log("pressed")}
              />
            )}
          />
        </View>
      </TouchableOpacity>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    paddingRight: 7,
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    //justifyContent: "row",
    alignContent: "center",
    //backgroundColor: colors.danger,
  },
});

export default DetailsCardContainer;
