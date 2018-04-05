import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Slider } from "react-native-elements";
import { Audio } from "expo";

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
    console.log('check sound this.sound',this.sound);
  };
  _startAudio = () =>{
    console.log('start audio happening')
    this.sound.playAsync()
    this.setState({isPlaying: true})
  }
  _stopAudio = () => {
    console.log('stop audio is pressed')
    this.sound.stopAsync()
    this.setState({isPlaying: false})
  }
  _onPressChange = () => {

    console.log('image was pressed')
    if (this.sound !== null){
    console.log('this is playing', this.state.isPlaying)

    this.state.isPlaying? this._stopAudio() : this._startAudio();
    }
  };

  _handlePlaySoundAsync = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: this.props.audio
    });
    await sound.playAsync();
    this.setState({isPlaying: true})
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
        <TouchableOpacity onPress={this._onPressChange}>
            <Image style={styles.image} source={{ uri: this.props.img }}/>
          </TouchableOpacity>
        <View
          style={{ flex: 0, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            onSlidingStart={this._handlePlaySoundAsync}
            // onSlidingComplete={this.state.value < 0.5? this._slideStop: null }
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
