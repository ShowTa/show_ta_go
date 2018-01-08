import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return(
      <div className='header'>
        <h1 className='header__title'>
          <Link to='/'>ShowTa</Link>
        </h1>

        <ul className='header__list'>
          <li>
            <Link to='/article'>Create Article</Link>
          </li>
          <li>
            <Link to='/my_page'>My Page</Link>
          </li>
        </ul>
      </div>
    )
  }
}
