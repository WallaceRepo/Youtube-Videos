import React from 'react';
import SearchBar from './SearchBar';
import KEY from './Api/youtube';
import utube from './Api/utube';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

     state = { 
       videos: [],
     selectedVideo: ''
    }
componentDidMount() {
  this.submitTerm('Twin babies');
}
    submitTerm = async (term) => {
      console.log( term);
        await utube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        }).then((response) => {
            this.setState( { videos: response.data.items,
                      selectedVideo: response.data.items[0] })
            }).catch((error) => {console.warn('Not response came')});
      }
     userSelectedVideo = (videoItem) => {
      console.log(videoItem);
      this.setState( { selectedVideo: videoItem });
      }
    
render(){
  return(
  <div className = "ui container">
    <h1 style = {{color:"#919191",}}>Type video's name on search bar</h1>
    <SearchBar  onSubmitTerm = { this.submitTerm } />
     <div className = "ui grid">
      <div className = "ui row">
        <div className = "eleven wide column">
         <VideoDetail video = { this.state.selectedVideo } />
        </div>
        <div className ="five wide column"> 
         <VideoList videos = { this.state.videos } SelectVideo = { this.userSelectedVideo }/>
        </div>
     </div>
   </div>
  </div>
  );
}
};

export default App;