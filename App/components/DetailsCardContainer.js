import React from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";

import Card from "./Cards/card";
import colors from "../config/colors";
import AppScreen from "./AppScreen";

const Inhalt = [
  {
    id: 1,
    type: "image",
    title: "Modul Wildkamera",
    subtitle: "live einsehen",
    content: require("../assets/placeholder-2.jpg"),
  },
  {
    id: 2,
    type: "image",
    title: "Modul Wildkamera",
    subtitle: "live einsehen",
    content: require("../assets/placeholder-2.jpg"),
  },
  {
    id: 3,
    type: "image",
    title: "Modul Wildkamera",
    subtitle: "live einsehen",
    content: require("../assets/placeholder-2.jpg"),
  },
];

function DetailsCardContainer() {
  return (
    <ScrollView>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <FlatList
            data={Inhalt}
            numColumns={2}
            keyExtractor={(Inhalt) => Inhalt.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.subtitle}
                type={item.type}
                content={item.content}
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
    backgroundColor: colors.light,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DetailsCardContainer;
