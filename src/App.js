import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Photos from './components/Photos';
import Search from './components/Search';

import { store } from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Search />
          <div id="images-container">      
            <Photos />
          </div>
        </div>    
      </Provider>
    );
  }
}

export default App;
