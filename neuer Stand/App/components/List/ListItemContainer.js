import React from "react";
import { Text, StyleSheet, Platform, FlatList } from "react-native";
import AppScreen from "../AppScreen";

import ListItemSeparator from "./ListItemSeperator";
import ListItem from "./Listitem";

const Inhalt = [
  {
    id: 1,
    title: "Regenmesser",
    subtitle: "Ø pro Monat ",
  },
  {
    id: 2,
    title: "Höchst- und Tiefsttemperaturen",
    subtitle: "Ø pro Monat ",
  },
  {
    id: 3,
    title: "UV-Index",
    subtitle: "Ø pro Monat ",
  },
];

function ListItemContainer() {
  return (
    <AppScreen>
      <FlatList
        data={Inhalt}
        keyExtractor={(Inhalt) => Inhalt.id.toString()}
        renderItem={({ item }) => (
          <ListItem title={item.title} subtitle={item.subtitle} />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});

export default ListItemContainer;
