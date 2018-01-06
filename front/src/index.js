import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './style.min.css'

import Header from './layout/header'

const App = () => {
  return(
    <div>
      <Header />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
