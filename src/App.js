import "./styles.css";
import React from "react";
import SearchBar from "./Components/SearchBar";
import Youtube from "./Api/Youtube";
import VideoList from "./Components/VideosList";
import VideoDetail from "./Components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    error: ""
  };

  handleVideoSelect = (selectedItem) => {
    this.setState({ selectedVideo: selectedItem });
  };

  //Api fetching data
  handleSubmit = async (term) => {
    try {
      const response = await Youtube.get("/search", {
        params: {
          q: term
        }
      });

      //setting suggested video into state
      this.setState({ videos: response.data.items });
    } catch (err) {
      //Handling error..
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
