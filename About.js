import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class About extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen HELLO</Text>
      </View>
    );
  }
}
