import React from 'react'

export default class Article extends React.Component {
  render() {
    return(
      <div className='article'>
        <div className='article__pic'>
          <img src='https://sociorocketnews.files.wordpress.com/2017/11/skrlkirby_images_01.jpg?w=580&h=581' />
        </div>

        <div className='article__info'>
          <div className='article__info__title'>This is Article.</div>
          <div className='article__info__data'>
            by user-name
            100いいね
          </div>
        </div>
      </div>
    )
  }
}
