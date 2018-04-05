import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Slider } from "react-native-elements";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.sound = null;
    this.state = {
      haveRecordingPermissions: false,
      isLoading: false,
      isPlaybackAllowed: false,
      muted: false,
      soundPosition: null,
      soundDuration: null,
      recordingDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isRecording: false,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0
    };
  }

  _checkSound = () => {
    console.log(this.sound);
  };

  _handlePlaySoundAsync = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    let sound = new Expo.Audio.Sound();
    await sound.loadAsync({
      uri: this.props.audio
    });
    await sound.playAsync();
    this.sound = sound;
  };

  _onVolumeSliderValueChange = value => {
    if (this.sound != null) {
      this.sound.setVolumeAsync(value);
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
            onSlidingStart={this._handlePlaySoundAsync}
            onSlidingComplete={this._checkSound}
            minimumValue={0.0}
            maximumValue={1.0}
            step={0.01}
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
