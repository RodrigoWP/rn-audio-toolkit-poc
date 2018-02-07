import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
import Player from './player'
import audiosMock from './mock'

export default class Main extends PureComponent {
  render () {
    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={audiosMock}
        renderItem={({ item }) => <Player audio={item} />}
      />
    )
  }
}
