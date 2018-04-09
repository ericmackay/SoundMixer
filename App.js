import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import { Header } from "react-native-elements";
import { StackNavigator } from "react-navigation";


import * as util from "./util";
import Card from "./Card";
import About from "./About";

const extractKey = ({ id }) => id;

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "/ˈkänˌstrəkt/",
      headerRight: (
        <Button onPress={params.goToAbout} title="About" color="#fff" />
      )
    };
  };

  _goToAbout = () => {
    this.props.navigation.navigate("About");
  };

  componentWillMount() {
    this.props.navigation.setParams({ goToAbout: this._goToAbout });
  }
  renderItem = ({ item }) => {
    return <Card {...item} />;
  };

  render() {
    return (
      <View>
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
  static navigationOptions = {
    title: "About"
  };
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
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#877777"
      },
      headerTintColor: "#fff"
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(126, 213, 111, 0.2)',
    flex: 0
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "skyblue"
  }
});

