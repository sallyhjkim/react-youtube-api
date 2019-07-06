import React from 'react'

const VideoClip = ({videoId}) =>{
    const videoSrc = `http://www.youtube.com/embed/${videoId}`

    return(
        <div>
            <div className="ui embed">
                <iframe title="video title" src={videoSrc}/>
            </div>
        </div>
    )
}

export default VideoClip;
