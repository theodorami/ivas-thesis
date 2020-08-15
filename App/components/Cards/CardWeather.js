import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import SmalText from "../Text/SmalText";
import { icon } from "leaflet";
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
        <SmalText style={{ color: "#00aaff" }}>Aktuell - {info.temp}</SmalText>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/tempmin.png")}
        />
        <SmalText style={{ color: "#00aaff" }}>
          Höchsttemperatur - {info.tempmax}
        </SmalText>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/tempmax.png")}
        />
        <SmalText style={{ color: "#00aaff" }}>
          Tiefsttemperatur - {info.tempmin}
        </SmalText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    borderRadius: 15,
    overflow: "hidden",
    margin: "4%",
    padding: "4%",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "fff",
    flex: 2,
    padding: 20,

    width: "100%",
    //  justifyContent: "center",
    alignItems: "center",
    //alignContent: "space-around",
  },
  image: {
    //flex: 1,
    width: 50,
    height: 50,
    backgroundColor: "f2f2f2",
    marginRight: "10%",
    resizeMode: "contain",
  },
  subtitle: {
    fontStyle: "italic",
  },
});
export default CardWeather;
