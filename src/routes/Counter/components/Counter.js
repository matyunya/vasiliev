import React, { Component } from 'react'
import YouTube from 'react-youtube'
import Text from './Text'

const opts = {
      width: '100%',
      height:  window.innerHeight * 0.9,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        start: 5374,
        controls: 0,
        showinfo : 0 ,
        rel : 0,
        disablekb : 1,
        modestbranding : 1,
        hl : 'ru', 
        autoplay: 1
      }
    };

function onPlayerStateChange(event) {
  setTimeout(function() {
      let time = event.target.getCurrentTime();
      console.log(time)
      if (time > 5377) {
        event.target.pauseVideo();
      }
  }, 4000);
}

class Counter extends Component {
    static propTypes = {
      playerClass: React.PropTypes.string.isRequired,
      switchPlayer: React.PropTypes.func.isRequired,
      classes: React.PropTypes.object.isRequired
    }

    _onReady (event) {
      event.target.playVideo();
    };

    render () {
      return (
        <div className="container-video">
          <div className="loader">
              <YouTube
                videoId="JJTQeahfbOY"
                className={this.props.playerClass}
                opts={opts}
                onReady={(e) => {this._onReady(e); this.props.switchPlayer("visible"); }}
                onStateChange={onPlayerStateChange}
                onPause={() => this.props.switchPlayer("semi")}
                onPlay={() => this.props.switchPlayer("back-to-visible")}
              />
            </div>
            <Text className={this.props.classes.textClass} />
          </div>
  )
    }
}

export default Counter