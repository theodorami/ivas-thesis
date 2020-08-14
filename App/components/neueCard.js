import React, { useState, useEffect } from "react";
import { Card, Title } from "react-native-paper";
import { View, Image } from "react-native";
//import AsyncStorage from "@react-native-community/async-storage";

const CardWeather = () => {
  const [info, setInfo] = useState({
    name: "loading !!",
    temp: "loading",
    humidity: "loading",
    desc: "loading",
    icon: "loading",
  });
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&APPID=a426cabcd115eeae0f361ad2638cbc89&units=metric`
    )
      .then((data) => data.json())
      .then((results) => {
        setInfo({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].setdecription,
          icon: results.weather[0].icon,
        });
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Title
          style={{
            color: "#00aaff",
            marginTop: 30,
            fontSize: 30,
          }}
        >
          {info.name}
        </Title>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={{
            uri: "https://openweathermap.org/img/w/" + info.icon + ".png",
          }}
        />
      </View>

      <Card
        style={{
          margin: 5,
          padding: 12,
        }}
      >
        <Title style={{ color: "#00aaff" }}>Temperature - {info.temp}</Title>
      </Card>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}
      >
        <Title style={{ color: "#00aaff" }}>Humidity - {info.humidity}</Title>
      </Card>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}
      >
        <Title style={{ color: "#00aaff" }}>Description- {info.desc}</Title>
      </Card>
    </View>
  );
};
export default CardWeather;
