import React, { Component } from 'react';

import '../styles/ProfileImg.css'

export default class ProfileImg extends Component {

  render() {
    return (<div className='ProfileImg'>
      <img src={this.props.src} alt="Ali Almohaya" />
    </div>);
  }

}