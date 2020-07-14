import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component{
  state={
    searchTerm:''
  }
  
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = (e) => {
    // destructuring
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    
    e.preventDefault();
  }

  render(){
    return(
      <Paper elevation={6} style={{padding: '25px'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange}/>
        </form>
      </Paper>
    )
  }
}

export default SearchBar;