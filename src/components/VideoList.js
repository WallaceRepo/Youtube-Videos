import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
     // props.videos
 const renderList = props.videos.map( 
     
 video => { return <VideoItem key = { video.id.videoId} video = { video } onVideoSelect = { props.SelectVideo }/> });
  
 return(
        
     
        <div className="ui middle aligned divided list"> { renderList} </div>     
       
    );
}

export default VideoList;