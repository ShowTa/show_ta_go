import React from 'react'
import ReactDOM from 'react-dom'

export default class Header extends React.Component {
  render() {
    return(
      <div className='header'>
        <h1 className='header__title'>ShowTa</h1>

        <ul className='header__list'>
          <li>Create Article</li>
          <li> My Page</li>
        </ul>
      </div>
    )
  }
}
