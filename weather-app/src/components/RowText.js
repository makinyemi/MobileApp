import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RowText(props) {
  const { messageOne, messageTwo, messageOneStyles, messageTwoStyles } = props;
  const { container } = styles;
  return (
    <View style={container}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
