import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Slider } from "react-native-elements";
import { Audio } from "expo";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.sound = null;
    this.state = {
      isLoading: false,
      muted: false,
      soundPosition: null,
      soundDuration: null,
      shouldPlay: false,
      isPlaying: false,
      value: 0.0
    };
  }

  componentDidMount() {
    this._handleLoadSoundAsync();
  }

  _handleLoadSoundAsync = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: this.props.audio
    });
    this.sound = sound;
  };

  _onPressChange = () => {
    if (this.sound !== null) {
      this.state.isPlaying ? this._stopAudio() : this._startAudio(1.0);
    }
  };

  _startAudio = value => {
    if (this.sound !== null) {
      this.sound.playAsync();
      this.sound.setVolumeAsync(value);
      this.sound.setIsLoopingAsync(true);
      this.setState({ isPlaying: true, value: value });
    }
  };

  _stopAudio = () => {
    this.sound.stopAsync();
    this.setState({
      isPlaying: false,
      value: 0.0
    });
  };

  _onVolumeSliderValueChange = value => {
    console.log(value);
    if (this.sound !== null) {
      this.sound.setVolumeAsync(value);
      console.log(this.state.value);
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressChange}>
          <Image style={styles.image} source={{ uri: this.props.img }} />
        </TouchableOpacity>
        <View
          style={{ flex: 0, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            onSlidingStart={value => this._startAudio(value)}
            onSlidingComplete={value => this._onVolumeSliderValueChange(value)}
            minimumValue={
              0.0 // onSlidingComplete={this.state.value < 0.5? this._slideStop: null }
            }
            maximumValue={1.0}
            step={0.01}
            thumbTintColor={"salmon"}
          />
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
