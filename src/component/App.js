import React, { Component } from 'react';

import ProfileImg from './ProfileImg';
import HeaderSection from './HeaderSection';
import Footer from './Footer';

import '../styles/App.css';

export default class App extends Component {

  render() {

    return (<div className='App'>

      <ProfileImg />

      <HeaderSection />

      <Footer />

    </div>);

  }

}