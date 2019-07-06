import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onThumbnailClick}) => {
  
    const renderList = videos.map((video,index)=>{
        return <VideoItem key ={index} video={video} onThumbnailClick={onThumbnailClick} />
    })
    return(
        <div className="ui relaxed divided list">{renderList}</div>
    )
}
export default VideoList;