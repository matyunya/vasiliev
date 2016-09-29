import React, { Component } from 'react'
import YouTube from 'react-youtube'
//import './Player.scss'

class Player extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        // autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="JJTQeahfbOY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
  }
}

export default Player
