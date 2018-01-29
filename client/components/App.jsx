import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor'
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import ReactDOM from 'react-dom';
import { EditorState} from 'draft-js';


const plugins = [
  createMarkdownShortcutsPlugin()
];

export default class DemoEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(editorState) {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
      />
    );
  }
}
