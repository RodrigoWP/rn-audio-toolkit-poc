import Sound from 'react-native-sound'
import RNAudioStreamer from 'react-native-audio-streamer'
import MusicControl from 'react-native-music-control'
import { STREAMING } from './constants'

class AudioManager {
  constructor () {
    this.player = null
    this.type = STREAMING
  }

  play (url) {
    this.pause()
    this.playStream(url)
  }

  async playSound (url) {
    await this.loadSound(url)
    this.player.play((success) => {
      if (success) {
        console.log('success')
      } else {
        console.log('error')
        this.player.reset()
      }
      this.player.release()
    })
  }

  loadSound (url) {
    return new Promise((resolve, reject) => {
      Sound.setCategory('Playback', true)
      this.player = new Sound(url, undefined, (error) => {
        if (error) {
          reject(error)
        }
        resolve()
      })
    })
  }

  playStream (url) {
    this.player = RNAudioStreamer
    this.player.setUrl(url)
    this.player.play()
  }

  pause () {
    if (this.player === null) return
    this.player.pause()
  }
}

export default new AudioManager()
