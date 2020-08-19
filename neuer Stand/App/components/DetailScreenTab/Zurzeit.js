import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";
import DetailsCard from "../Cards/DetailsCard";
import AppScreen from "../AppScreen";

import { create } from "apisauce";

import colors from "../../config/colors";

const Zurzeit = () => {
  const [pillar, setPillar] = useState({
    temp: "Aktuelle Temperatur lädt...",
    tempmax: "Max. Temperatur lädt",
    tempmin: "Min. Temperatur lädt",
  });

  axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely,feels_like&appid=a426cabcd115eeae0f361ad2638cbc89",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        // responseType: "json",
      }
    )
    .then(function (response) {
      setPillar({
        temp: results.current.temp,
        tempmax: results.daily[0].temp.max,
        tempmin: results.daily[0].temp.min,
      });
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return (
    <TouchableOpacity>
      <View styles={{ flex: 1, backgroundColor: "black" }}>
        <Text> Hallo + {pillar.temp} </Text>
        <Text> {pillar.uvindex} </Text>
        <Text> {pillar.tempmax} </Text>
        <Text> {pillar.tempmin} </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Zurzeit;
