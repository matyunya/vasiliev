import React, { Component } from 'react'
import YouTube from 'react-youtube'
import './Player.scss'

class Player extends Component {
  render() {
    const opts = {
      width: '100%',
      height:  window.innerHeight * 0.9,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        // autoplay: 1
        start: 5374,
        controls: 0,
        showinfo : 0 ,
        rel : 0,
        disablekb : 1,
        modestbranding : 1,
        'hl' : 'ru', 
      }
    };

    return (
      <div className="container-video">
        <YouTube
          videoId="JJTQeahfbOY"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.playVideo();
  }
}

export default Player
