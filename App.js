import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

const marked = require("marked");
class App extends Component {
  state = {
    markdown: " "
  }
  updateMarkdown = function(markdown) {
    this.setState({markdown});
  }
  render() {
    let{ markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App container-fluid">
      <div>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel><u><h1>Enter Markdown Input Below</h1></u></ControlLabel>
          <FormControl componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange = 
          {(event)=>this.updateMarkdown(event.target.value)}></FormControl>
        </FormGroup>
      </div>
      <div>
        <u><h1>Markdown Output Below</h1></u>
        <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div> 
      </div>
      </div>
    );
  }
}

export default App;
