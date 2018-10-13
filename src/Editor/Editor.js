import React, { Component } from 'react';
import ace from 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/snippets/javascript';

class Editor extends Component {
  componentDidMount() {
    const editor = ace.edit(this.editor);
    editor.setTheme('ace/theme/twilight');
    editor.session.setMode("ace/mode/javascript");
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });
  }

  render() {
    return (
      <div
        ref={(node) => { this.editor = node; }}
        style={{ width: 600, height: 600 }}
      />
    );
  }
}

export default Editor;