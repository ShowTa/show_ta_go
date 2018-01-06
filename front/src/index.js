import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './style.min.css'

import Header from './layout/header'
import Footer from './layout/footer'

import Top from './top/top'

const App = () => {
  return(
    <div>
      <Header />
      <div className='contents'>
        <Top />
      </div>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
