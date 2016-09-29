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

class Counter extends Component {
    static propTypes = {
      switchPlayer: React.PropTypes.func.isRequired,
      classes: React.PropTypes.object.isRequired
    }

    _onReady (event) {
      event.target.playVideo();
    }

    //todo: debounce
    onPlayerStateChange(event, props) {
      setTimeout(function() {
          let time = event.target.getCurrentTime();
          if (time > 5377 && props.classes.counter < 1) {
            event.target.pauseVideo();
          } else if (time > 5383 && props.classes.counter < 2) {
            event.target.pauseVideo();
          } else if (time > 5387 && props.classes.counter < 3) {
            event.target.pauseVideo();
          } else if (time > 5394 && props.classes.counter < 4) {
            event.target.pauseVideo();
          } else if (time > 5400 && props.classes.counter < 5) {
            event.target.pauseVideo();
          }
      }, 4000);
    }

    _play(event, props) {
      props.switchPlayer("back-to-visible");
      props.increment();
    }

    render () {
      return (
        <div className="container-video">
          <div className="loader">
              <YouTube
                videoId="JJTQeahfbOY"
                className={this.props.classes.playerClass}
                opts={opts}
                onReady={(e) => {this._onReady(e); this.props.switchPlayer("visible"); }}
                onStateChange={(e) => this.onPlayerStateChange(e, this.props)}
                onPause={() => this.props.switchPlayer("semi")}
                onPlay={(e) => this._play(e, this.props)}
              />
            </div>
            <Text className={this.props.classes.textClass} i={this.props.classes.counter} />
          </div>
  )
    }
}

export default Counter