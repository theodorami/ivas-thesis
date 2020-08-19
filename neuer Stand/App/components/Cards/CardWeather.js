import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import SmalText from "../Text/SmalText";
import { icon } from "leaflet";

import colors from "../../config/colors";
//import AsyncStorage from "@react-native-community/async-storage";

const CardWeather = () => {
  const [info, setInfo] = useState({
    temp: "Aktuelle Temperatur lädt...",
    tempmax: "Max. Temperatur lädt",
    tempmin: "Min. Temperatur lädt",
    icon: "Aktuelles Wetter lädt...",
  });
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=52.503526&lon=13.410239&
      exclude=hourly,minutely,feels_like&appid=a426cabcd115eeae0f361ad2638cbc89&units=metric`
    )
      .then((data) => data.json())
      .then((results) => {
        setInfo({
          temp: results.current.temp,
          tempmax: results.daily[0].temp.max,
          tempmin: results.daily[0].temp.min,
          icon: results.current.weather[0].icon,
        });
      });
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: "https://openweathermap.org/img/w/" + info.icon + ".png",
          }}
        />
        <View style={styles.holder}>
          <SmalText style={styles.title}> {info.temp} C° </SmalText>
          <SmalText style={styles.subtitle}>Aktuell</SmalText>
        </View>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/tempmin.png")}
        />
        <View style={styles.holder}>
          <SmalText style={styles.title}> {info.tempmax} C° </SmalText>
          <SmalText style={styles.subtitle}>Höchsttemperatur</SmalText>
        </View>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/tempmax.png")}
        />
        <View style={styles.holder}>
          <SmalText style={styles.title}> {info.tempmin} C° </SmalText>
          <SmalText style={styles.subtitle}>Tiefsttemperatur</SmalText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    width: "46%",
    borderRadius: 15,
    overflow: "hidden",
    marginStart: "4%",
    paddingTop: "4%",
    backgroundColor: colors.white,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "fff",
    flex: 2,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  image: {
    //flex: 1,
    width: 50,
    height: 50,
    marginRight: "10%",
    resizeMode: "contain",
  },
  holder: {
    flexDirection: "column",
    //alignContent: "center",
    justifyContent: "center",
  },
  subtitle: {
    color: colors.primary,
  },
  title: {
    color: colors.third,
  },
});
export default CardWeather;
