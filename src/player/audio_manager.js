import Sound from 'react-native-sound'

/**
 * 1º: (Primeira vez)  carrega o audio - resume o audio
 * 2º: (Sem pausar o anterior)  carrega o audio - resume o audio
 * 3º: (Pausando o audio e continuando no mesmo) paused = true - resume o audio
 * 4º: (Pausando o audio e indo pro próximo) paused = true - recarregar o audio
 */

class AudioManager {
  constructor () {
    this.player = null
    this.currentAudio = null
  }

  async play (url, onFinish) {
    if (this.currentAudio !== url) {
      onFinish()
      await this.loadSound(url)
      this.currentAudio = url
    }
    this.resume(onFinish)
  }

  release () {
    if (this.player === null) return
    this.player.pause().release()
  }

  pause () {
    if (this.player === null) return
    this.player.pause()
  }

  resume (onFinish) {
    this.player.play((success) => {
      if (!success) {
        this.player.reset()
      }
      this.release()
      onFinish()
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
}

export default new AudioManager()
