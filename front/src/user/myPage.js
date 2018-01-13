import React from 'react'

import Article from '../top/article'

export default class MyPage extends React.Component {
  render() {
    return(
      <div className='user'>
        <div className='user__info'>
          <div className='user__info__left'>
            <img src='http://www.nekomasamune.com/download/nekomasamune-g.jpg' className='user__info__left__img' />
          </div>
          <div className='user__info__right'>
            <div className='user__info__right__name'>しょうたさん</div>
            <div className='user__info__right__favorite'>Total いいね数 : 100いいね</div>
          </div>
        </div>

        <div>
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
