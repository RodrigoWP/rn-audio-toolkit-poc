import React, { PureComponent } from 'react'
import Player from './player'
import audiosMock from './mock'

export default class Main extends PureComponent {
  render () {
    return (
      <Player audio={audiosMock[0]} />
    )
  }
}
