import Sound from 'react-native-sound'
import RNAudioStreamer from 'react-native-audio-streamer'
import MusicControl from 'react-native-music-control'

class AudioManager {
  constructor () {
    this.player = null
  }

  load (audio) {
    Sound.setCategory('Playback', true)
    // this.pause()
    return new Promise((resolve, reject) => {
      this.player = new Sound(audio.url, undefined, (error) => {
        if (!error) {
          resolve()
        }
        reject(error)
      })
    })
  }

  play () {
    this.player.play(() => console.log('PLAY AUDIO'))
  }

  pause () {
    if (this.player === null) return

    this.player.pause()
  }
}

export default new AudioManager()
