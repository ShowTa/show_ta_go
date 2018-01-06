import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './style.min.css'

import Header from './layout/header'
import Footer from './layout/footer'

import Top from './top/top'

const Routing = () => {
  return(
    <div>
      <Route exact path='/' component={Top} />
      <Route path='/article' component={Top} />
      <Route path='/user' component={Top} />
    </div>
  )
}

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Header />
        <div className='contents'>
          <Top />
        </div>
        <Footer />
        <Routing />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
