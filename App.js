import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { StackNavigator } from "react-navigation";

import * as util from "./util";
import Card from "./Card";
import About from "./About";

const extractKey = ({ id }) => id;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "/ˈkänˌstrəkt/"
  }

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
            onPress: () => {
              this.props.navigation.navigate("About");
            },
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

class AboutScreen extends React.Component {
  render() {
    return <About />;
  }
}

const RootStack = StackNavigator(
  {
    About: {
      screen: AboutScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
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
