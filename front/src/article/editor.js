import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import marked from 'marked'

import 'brace/mode/markdown'
import 'brace/theme/github'

const MarkdownEditor = (props) => {
  return(
    <div class='editor'>
      <AceEditor
        mode='markdown'
        theme='textmate'
        width='40vw'
        height='calc(100vh - (54px + 150px + 40px))'
        name='markdownEditer'
        tabSize={2}
        showPrintMargin={false}
        highlightActiveLine={false}
        editorProps={{$blockScrolling: true}}
        onChange={props.editValue}
        value={props.value}
      />
    </div>
  )
}

const Preview = (props) => {
  return (
    <div
      className='preview'
      dangerouslySetInnerHTML={{__html: marked(props.data)}}
    />
  )
}

export default class Editor extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }

    this.editValue = this.editValue.bind(this)
  }

  editValue(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return(
      <div className='markdown-editor'>
        <MarkdownEditor editValue={this.editValue} value={this.state.value} />
        <Preview data={this.state.value} />
      </div>
    )
  }
}
