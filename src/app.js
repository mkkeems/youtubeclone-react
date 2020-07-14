import React from 'react';
// for non default export, need curly braces
import { Grid } from '@material-ui/core';

import {SearchBar, VideoList, VideoDetail} from './components';
// no curly braces mean it is the only import
import youtube from './api/youtube';
// const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
require('dotenv').config();

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResult: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });

    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }
 
  render(){
    const { selectedVideo } = this.state;
    return(
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              Video List
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;