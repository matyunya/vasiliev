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

    _pause(event, props) {
      if (props.classes.playerClass !== "semi") {
        this.props.switchPlayer("semi");  
      }
    }

    _p(e, props, id) {
      e.target.pauseVideo();
      clearInterval(id);
      props.increment();
    }

    _play(event, props) {
      props.switchPlayer("back-to-visible");
      let id = setInterval(function() {
        let time = event.target.getCurrentTime();
        console.log("here", time, props.classes)
        if (time > 5377 && props.classes.counter < 0) {
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5419 && props.classes.counter < 1) { // 5419
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5518 && props.classes.counter < 2) {  // 5518
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5606 && props.classes.counter < 3) { // 5606
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        } else if (time > 5649 && props.classes.counter < 4) { // 5649
          event.target.pauseVideo();
          clearInterval(id);
          props.increment();
        }
      }, 500);
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
                onPlay={(e) => this._play(e, this.props)}
              />
            </div>
            <Text className={this.props.classes.textClass} i={this.props.classes.counter} />
          </div>
  )
    }
}

export default Counter