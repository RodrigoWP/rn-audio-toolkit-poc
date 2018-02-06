import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import AudioManager from './audio_manager'

class Player extends PureComponent {
  play = async () => {
    try {
      const { audio } = this.props

      await AudioManager.load(audio)
      AudioManager.play()
    } catch (err) {
      console.log('Erro ao carregar audio: ', err)
    }
  }

  render () {
    return (
      <View>
        <TouchableOpacity
          onPress={this.play}
          style={styles.roundButton}>
          {/* <Icon name='play-circle' color='white' /> */}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#3b495e',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Player
