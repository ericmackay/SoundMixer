import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { StackNavigator } from "react-navigation";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ padding: 10 }}>/ˈrandəm/</Text>
          <Text style={{ padding: 10 }}>
            /pəːmjʊˈteɪʃ(ə)ns/ /ɒv/ /θɔːt/ /tīm/ /spās/ /(ə)n// tHə/ /ˈbädē/
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingBottom: 20,
            padding: 10
          }}
        >
          <Text>©️ eduardo della foresta, eric mackay, megan mcewan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(126, 213, 111, 0.2)",
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(174,186,167,0.5)"
  }
});
