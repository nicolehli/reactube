import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  // A callback for search bar input submission
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    // Update state with list of videos
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar uponSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos. (Note: I've set Max = 5)
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
