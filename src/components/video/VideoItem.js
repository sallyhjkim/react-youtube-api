import React from 'react'


const VideoItem = ({video, onThumbnailClick}) =>{

    return(
        <div className="ui card" onClick={()=>onThumbnailClick(video)}>
            <div className="image"><img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} /></div>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;