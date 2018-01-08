import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './style.min.css'

import Header from './layout/header'
import Footer from './layout/footer'

import Top from './top/top'
import Editor from './article/editor'

const Routing = () => {
  return(
    <div>
      <Route exact path='/' component={Top} />
      <Route path='/article' component={Editor} />
      <Route path='/my_page' component={Top} />
    </div>
  )
}

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Header />
        <div className='contents'>
          <Routing />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
