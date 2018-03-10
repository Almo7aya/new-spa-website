import React, { Component } from 'react';

import FontAwesome from '@fortawesome/react-fontawesome'

import '../styles/Footer.css';

export default class Footer extends Component {

  render() {
    return (<div className='Footer'>

      <div id='inter'>
        <span></span>
        <span></span>
      </div>

      <div id='icons'>
        <FontAwesome name='github' />
        <FontAwesome name='rocket' />
        <FontAwesome name='home' />
      </div>

    </div>);
  }

}