import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MenuCard from "../components/Cards/MenuCard";
import colors from "../config/colors";
import AppScreen from "./AppScreen";

const Menu = [
  {
    id: 1,
    title: "Basis hinzufügen",
    subTitle: "Einrichtung",
    image: require("../assets/icons/hinzufügen.png"),
  },
  {
    id: 2,
    title: "Schulungscenter",
    subTitle: "online Tutorials",
    image: require("../assets/icons/hinzufügen.png"),
  },
  {
    id: 3,
    title: "Module",
    subTitle: "Inbetriebnahme",
    image: require("../assets/icons/tutorial.png"),
  },
  {
    id: 4,
    title: "Einstellungen",
    subTitle: "",
    image: require("../assets/icons/settings.png"),
  },
];

function MenuCardContainer() {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={Menu}
          //ItemSeparatorComponent={separators.unhighlight}
          keyExtractor={(Menu) => Menu.id.toString()}
          renderItem={({ item }) => (
            <MenuCard
              title={item.title}
              style={styles.cards}
              subTitle={item.subTitle}
              image={item.image}
            />
          )}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    //marginStart: "2%",
    flex: 1,
  },
  container: {
    //flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MenuCardContainer;
