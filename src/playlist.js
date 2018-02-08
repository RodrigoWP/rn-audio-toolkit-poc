import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
import Player from './player'
import audiosMock from './mock'

export default class Playlist extends PureComponent {
  state = {
    audios: []
  }

  componentDidMount () {
    this.loadPlaylist()
  }

  loadPlaylist = () => {
    this.setState({
      audios: audiosMock
    })
  }

  startPlay = (audioId) => {
    const { audios } = this.state

    this.setState({
      audios: audios.map(audio => {
        return {
          ...audio,
          isPlaying: audio.id === audioId
        }
      })
    })
  }

  render () {
    const { audios } = this.state

    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={audios}
        renderItem={({ item }) => (
          <Player
            audio={item}
            onStartPlay={this.startPlay}
            onResetPlaylist={this.loadPlaylist}
          />
        )}
      />
    )
  }
}
