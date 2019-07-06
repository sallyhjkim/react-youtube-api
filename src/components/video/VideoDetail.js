import React from 'react'
import VideoClip from './VideoClip'

const VideoDetail = ({selectedVideo}) =>{
    if(!selectedVideo){
        return (
            <div className="ui active transition visible inverted dimmer">
                <div className="ui inverted text loader">Loading...</div>
            </div>
        )
    }
    
    return(
        <div>
            <VideoClip videoId={selectedVideo.id.videoId}/>
            <div className="ui segment">
                <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;
