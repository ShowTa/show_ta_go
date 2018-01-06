import React from 'react'

import Article from './article'

export default class Top extends React.Component {
  render() {
    return(
      <div className='top'>
        <div className='article-index'>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    )
  }
}
