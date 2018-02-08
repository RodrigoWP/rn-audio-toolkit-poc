import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import AudioManager from './audio_manager'

class Player extends PureComponent {
  state = {
    isPlaying: false
  }

  toggle = () => {
    const { isPlaying } = this.state

    isPlaying ? this.stop() : this.play()
  }

  play = () => {
    const { audio } = this.props

    AudioManager.play(audio.url, () => {
      // onFinishSound()
    })

    this.setState({
      isPlaying: true
    })
  }

  stop = () => {
    AudioManager.pause()

    this.setState({
      isPlaying: false
    })
  }

  render () {
    const { isPlaying } = this.state
    const { name } = this.props.audio

    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <TouchableOpacity
            onPress={this.toggle}
            style={styles.roundButton}>
            <Text>{isPlaying ? 'Stop' : 'Play'}</Text>
          </TouchableOpacity>
          <Text>{name}</Text>
        </View>
      </View>
    )
  }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: width,
    backgroundColor: '#e5edf4',
    paddingLeft: 15,
    justifyContent: 'center'
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#3b495e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  text: {
    color: '#3b495e',
    fontWeight: 'bold'
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default Player
