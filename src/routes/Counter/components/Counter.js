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

    constructor(props) {
      super(props);
      this.state = {player: {}};
    }

    _onReady(event) {
      event.target.playVideo();
      this.setState({player: event.target});

      let listener = e => this._continue(e);
      window.addEventListener('mousedown', listener);
    }

    _continue(e) {
      if (e.target.localName !== 'a') {
        this.state.player.playVideo();
      }
    }

    _pause(event, props) {
      if (props.classes.playerClass !== "semi") {
        this.props.switchPlayer("semi");  
      }
    }

    _play(event, props) {
      props.switchPlayer("back-to-visible");

      let id = setInterval(function() {
        let time = event.target.getCurrentTime();

        if (time > 5377 && props.classes.counter < 0) {
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5419 && props.classes.counter < 1) {
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5518 && props.classes.counter < 2) { 
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5606 && props.classes.counter < 3) {
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5649 && props.classes.counter < 4) {
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (props.classes.counter >= 4) {
          props.switchPlayer("hidden");
          console.log("FINISH!");
        }
      }, 1000);
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
                onPause={(e) => this._pause(e, this.props)}
                onPlay={(e) => {this._play(e, this.props)} }
              />
            </div>
            <Text className={this.props.classes.textClass} i={this.props.classes.counter} />
          </div>
  )
    }
}

export default Counter