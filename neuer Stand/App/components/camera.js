import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

import AppText from "./Text/AppText";
import colors from "../config/colors";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Keine Erlaubnis</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1, margin: "10%" }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#265902",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <AppText style={{ color: colors.third }}>Drehen</AppText>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
