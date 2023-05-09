import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";

export default function CurrentWeather() {
  const {
    container,
    wrapper,
    highLow,
    highLowWrapper,
    bodyWrapper,
    temp,
    feels,
    message,
    description,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <Text>Current Weather</Text>

      <View style={container}>
        <FontAwesome5 name="sun" size={100} color="black" />
        <RowText
          messageOne={"6"}
          messageTwo={"Feels like 5"}
          messageOneStyles={temp}
          messageTwoStyles={feels}
        />
        <View style={highLowWrapper}>
          <RowText
            messageOne={"High: 8"}
            messageTwo={"Low: 6"}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>
      </View>
      <View style={bodyWrapper}>
        <RowText
          messageOne={weatherType.Thundertorm.message}
          messageTwo={weatherType.Thundertorm.message}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
