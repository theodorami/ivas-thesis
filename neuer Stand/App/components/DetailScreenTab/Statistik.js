import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Accordian from "../List/Accordian";
import colors from "../../config/colors";

export default class Statistik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: undefined,
      list: [
        {
          title: "Regenmenge",
          subtitle: "Ø pro Jahr",
          data:
            "Die Statistik zeigt den durchschnittlichen monatlichen Niederschlag in Berlin in den Monaten von Juli 2019 bis Juli 2020. Im Juli 2020 betrug der durchschnittliche Niederschlag in Berlin 45 Liter pro Quadratmeter.",
        },
        {
          title: "Höchst- und Tiefsttemperaturen",
          subtitle: "Ø pro Jahr ",
          data:
            "In Berlin sind die Sommer angenehm und teilweise bewölkt, und die Winter sind lang, sehr kalt, windig und größtenteils bewölkt. Im Verlauf des Jahres bewegt sich die Temperatur in der Regel zwischen -2 °C und 25 °C und liegt selten unter -10 °C oder über 31 °C.",
        },
        {
          title: "Luftfeuchtigkeit",
          subtitle: "Ø pro Jahr ",
          data:
            "Der wahrgenommene Feuchtigkeitsgrad in Berlin, der anhand des Prozentsatzes der Zeit gemessen wird, in der das Luftfeuchtigkeits- und Komfortniveau schwül, drückend oder miserabel ist, variiert im Verlauf des Jahres nicht erheblich und bleibt die ganze Zeit über innerhalb von ein 0.1% von 1 %.",
        },
        {
          title: "UV-index",
          subtitle: "Ø pro Jahr",
          data:
            "Er ist international einheitlich festgelegt und liegt zwischen 0 und 12. In Berlin kann der UV-Index nur bis 8 steigen. Um die Mittagszeit ist der Wert in der Regel am höchsten, dann ist das Sonnenbrandrisiko besonders hoch.",
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderAccordians()}
      </ScrollView>
    );
  }

  onPressAccordeon = (key) => {
    if (key === this.state.activeIndex) {
      this.setState({
        activeIndex: undefined,
      });
    } else {
      this.setState({
        activeIndex: key,
      });
    }
  };

  renderAccordians = () => {
    return this.state.list.map((listItem, i) => (
      <Accordian
        key={i}
        title={listItem.title}
        subtitle={listItem.subtitle}
        data={listItem.data}
        expanded={i === this.state.activeIndex}
        onPress={() => {
          this.onPressAccordeon(i);
        }}
      />
    ));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: colors.light,
  },
});
