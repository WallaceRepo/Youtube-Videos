import React from 'react';

const VideoItem = props => {
     
    return(

        <div className ="item" onClick = {
          () => props.onVideoSelect(props.video) } >
           <img alt = { props.video.snippet.title } className="ui image extra small" src = { props.video.snippet.thumbnails.medium.url } />
           <div className="content">  
           <botton className="header">
             { props.video.snippet.title } 
             </botton>
            </div>
        </div>
    );
}

export default VideoItem;