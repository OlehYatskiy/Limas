import React, { Component } from 'react';

import Header from './components/Header/index';
import Content from './components/Content';
import Footer from './components/Footer';

import style from './index.less';
import favicon from '../favicon.ico';
import './data/fonts/Geometria/stylesheet.css';
import './data/fonts/GothamPro/stylesheet.css';
import './data/fonts/FuturaDemi/stylesheet.css';

class App extends Component {

    render() {
        return (
            <div>
              <Header />
              <Content />
              <Footer />
            </div>
    )
  }
}

export default App;
