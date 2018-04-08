import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

import * as util from "./util";
import Card from "./Card";

const extractKey = ({ id }) => id;

export default class App extends Component {
  renderItem = ({ item }) => {
    return <Card {...item} />;
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: "/ˈkänˌstrəkt/", style: { color: "#fff" } }}
          rightComponent={{
            icon: "home",
            onPress: () => console.log("create link to about page"),
            color: "#fff"
          }}
        />
        <FlatList
          style={styles.container}
          data={util.Data}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "skyblue"
  }
});
