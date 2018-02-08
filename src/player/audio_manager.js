import Sound from 'react-native-sound'

class AudioManager {
  constructor () {
    this.player = null
    this.currentAudio = null
  }

  async play (url, onFinishCallback) {
    if (this.currentAudio !== url) {
      await this.loadSound(url)
      this.currentAudio = url
    }
    this.resume(onFinishCallback)
  }

  pause () {
    if (this.player === null) return
    this.player.pause()
  }

  resume (onFinishCallback) {
    this.player.play((success) => {
      if (!success) {
        this.player.reset()
      }
      this.release()
      onFinishCallback()
    })
  }

  loadSound (url) {
    this.release()

    Sound.setCategory('Playback', true)
    return new Promise((resolve, reject) => {
      this.player = new Sound(url, undefined, (error) => {
        if (error) {
          reject(error)
        }
        resolve()
      })
    })
  }

  release () {
    if (this.player === null) return
    this.player.pause().release()
    this.currentAudio = null
  }
}

export default new AudioManager()
