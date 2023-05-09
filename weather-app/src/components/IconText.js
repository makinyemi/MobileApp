import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

export default function IconText(props) {
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    const { textTheme, contanier } = styles;

    return (
        <View style={contanier}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    contanier: {
        alignItems: "center"
    },
    textTheme : {
        fontWeight : "bold"
    },
})