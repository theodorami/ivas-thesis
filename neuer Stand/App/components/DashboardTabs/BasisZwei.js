import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Cardalt from "../Cards/cardalt";
import colors from "../../config/colors";
import AppScreen from "../AppScreen";

import routes from "../../navigation/routes";
import DetailsCardContainer from "../DetailsCardContainer";

const Inhalt = [
  {
    id: 1,
    title: "Basis Standort",
    subTitle: "lat:52.5035 lon:13.4102",
    image: require("../../assets/placeholder-3.jpg"),
  },
  {
    id: 2,
    title: "Modul Wilkamera",
    subTitle: "live einsehen",
    image: require("../../assets/placeholder-5.jpg"),
  },
];

function BasisEins({ navigation }) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={Inhalt}
          numColumns={2}
          keyExtractor={(Inhalt) => Inhalt.id.toString()}
          renderItem={({ item }) => (
            <Cardalt
              title={item.title}
              style={styles.cards}
              subTitle={item.subTitle}
              image={item.image}
            />
          )}
        />
      </View>
      <DetailsCardContainer />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    backgroundColor: colors.light,
    marginEnd: 6,
    flex: 1,
  },
  container: {},
});

export default BasisEins;
