import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Slider } from "react-native-elements";

export default class Card extends Component {
  state = {
    value: 0
  };

  _PlayAudio = async () => {
    try {
      const { soundObject, status } = await Expo.Audio.Sound.create(
        { uri: this.props.audio },
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };

  render() {
    return (
      <View>
        <Image style={styles.image} source={{ uri: this.props.img }} />
        <View
          style={{ flex: 0, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            onSlidingStart={this._PlayAudio}
            minimumValue={0}
            maximumValue={100}
            step={1}
            thumbTintColor={"salmon"}
          />

          <Text>Value: {this.state.value}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400
  },
  row: {
    marginBottom: 5,
    backgroundColor: "skyblue"
  }
});
