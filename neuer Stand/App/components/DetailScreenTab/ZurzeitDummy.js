import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";

import AppScreen from "../../components/AppScreen";
import DetailsCard from "../Cards/DetailsCard";

const Inhalt = [
  {
    id: 1,
    title: "25 C°",
    titleOne: "40 %",
    titleTwo: "25 %",
    subtitle: "Aktuell",
    subtitleOne: "Luftfeuchte",
    subtitleTwo: "Bodenfeuchte",
    image: require("../../assets/icons/UVindex.png"),
    imageOne: require("../../assets/icons/Feuchtigkeit.png"),
    imageTwo: require("../../assets/icons/Bodenfeuchtigkeit.png"),
  },
  {
    id: 2,
    title: "",
    title: "TINO UV ",
    titleOne: "E 14",
    titleTwo: "1016.4 hPa",
    subtitle: "UV index",
    subtitleOne: "kmh Wind",
    subtitleTwo: "Luftdruck",
    image: require("../../assets/icons/UVindex.png"),
    imageOne: require("../../assets/icons/wind.png"),
    imageTwo: require("../../assets/icons/luftdruck.png"),
  },
];

function ZurzeitDummy() {
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

export default ZurzeitDummy;
