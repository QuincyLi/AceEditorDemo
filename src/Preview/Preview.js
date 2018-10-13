import React, { Component } from 'react';

import JSONFormatter from 'json-formatter-js';

class Preview extends Component {
  componentWillReceiveProps(nextProps){
    // try {
    //   const formatContent = new JSONFormatter(JSON.parse(nextProps.text));
    //   this.content.innerHTML= '';
    //   this.content.appendChild(formatContent.render());
    // } catch (e) {
    //   console.error(e)
    // }
  }

  render() {
    return (
      <div ref={(content) => {this.content = content;}}/>
    );
  }
}

export default Preview;