import React from 'react';
import YouTube from 'react-youtube';
import FadeLoader from "react-spinners/ScaleLoader";

const videoIds = ['SKZrTKAS80M', 'GtQPwbftSLg', 'RGKh0zKg28k', 'ULYHJ5bnBFY', 'sXLdIYL30tw', 'iHJ16hD4ysk', 'xahb_0e0U3s']

class Videos extends React.Component {
    render() {
        return(
            <div id='videos-list-container'>
                <h3 id="today-technology">Related videos</h3>
                <div id='videos-list'>
                    {videoIds.map((videoId,index) => {
                        return (
                            <Video id={videoId} key={index} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

class Video extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
  
      return (
        <YouTube
          videoId={this.props.id}
          opts={opts}
          onReady={this._onReady}
          className='videos-items'
        />
      );
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
  
  export default Videos;