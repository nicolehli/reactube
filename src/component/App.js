import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // run a default search to start
  componentDidMount() {
    this.onTermSubmit("Vancouver Canada");
  }

  // A callback for search bar input submission
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    // Update state with list of videos, and set one as the default video
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  // A callback for a video list selection
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div style={{ paddingTop: 20 }} className='ui container'>
        <SearchBar uponSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='four wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
