import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class About extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen HELLO</Text>
        <View style= {styles.overlay}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(126, 213, 111, 0.2)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
   
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(174,186,167,0.5)',
  }
});

