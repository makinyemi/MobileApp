import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import IconText from "../components/IconText";

export default function City() {

    const { container, image, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles;
    
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={image} source={require("../../assets/city-background.jpg")}>
                <Text style={[cityName, cityText]}>New York</Text>
                <Text style={[countryName, cityText]}>US</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} iconColor={"red"} bodyText={"8000"} bodyTextStyles={populationText} />
                </View >
                <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={"white"} bodyText={"10:46:58 AM"} bodyTextStyles={riseSetText} />

                <IconText iconName={'sunset'} iconColor={"white"} bodyText={"17:28:31 PM"} bodyTextStyles={riseSetText} />
                   
                
                </View>
                <View>
                    
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "navy",
        marginTop: StatusBar.currentHeight || 0
    },
    image : {
        flex : 1,
    },
    cityName : {
        fontSize : 40,
    }, 
    countryName : {
        fontSize : 30,
    }, 
    cityText: {
        justifyContent : "center",
        alignSelf : "center",
        color: "white",
        fontWeight : "bold"
    }, 
    populationWrapper : {
        justifyContent: "center",
        marginTop: 30
    }, 
    populationText : {
        fontWeight : "bold",
        color : "red",
        marginLeft: 7.5,
        fontSize: 25
    },
    riseSetWrapper : {
        justifyContent : "space-around",
        marginTop : 30
    }, 
    riseSetText : {
        fontSize : 20,
        color : "white",
    }, 
    rowLayout : {
        flexDirection : "row",
        alignItems : "center"
    }
})