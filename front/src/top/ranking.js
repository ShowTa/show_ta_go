import React from 'react'

import Article from './article'

export default class Ranking extends React.Component {
  render() {
    return(
      <div className='ranking'>
        <div className='ranking__title'>
          Favorite Ranking
        </div>

        <div className='ranking__article'>
          <div className='ranking__article__rank-pic'>
            <img src='http://suzakijunichi.com/blog/wp-content/uploads/2016/11/1.jpg' />
          </div>
          <Article />

          <div className='ranking__article__rank-pic'>
            <img src='https://t3.ftcdn.net/jpg/00/42/08/14/500_F_42081419_lkXNvQoF1JGGpgkDnosAonBQFYxVwo2Y.jpg' />
          </div>
          <Article />

          <div className='ranking__article__rank-pic'>
            <img src='https://www.slideteam.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/u/number_three_golden_laurel_design_stock_photo_Slide01.jpg' />
          </div>
          <Article />
        </div>
      </div>
    )
  }
}
