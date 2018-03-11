import React, { Component } from 'react';

import ProfileImg from './ProfileImg';
import HeaderSection from './HeaderSection';
import Footer from './Footer';

import '../styles/App.css';

export default class App extends Component {

  render() {

    const imageSrc = 'https://avatars0.githubusercontent.com/u/17254073?s=460&v=4';

    return (<div className='App'>

      <ProfileImg />

      <HeaderSection />

      <Footer />

    </div>);

  }

}