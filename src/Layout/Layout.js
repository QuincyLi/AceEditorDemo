import React, { Component } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
// import './Layout.css'

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      content: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      text: value
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Editor 
              text={this.state.text}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <Preview 
              text={this.state.text}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;