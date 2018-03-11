import React, { Component } from 'react';

import '../styles/ProfileImg.css';
import photo from '../imgs/photo.jpg';

export default class ProfileImg extends Component {

  render() {
    return (<div className='ProfileImg'>
      <img src={photo} alt="Ali Almohaya" />
    </div>);
  }

}