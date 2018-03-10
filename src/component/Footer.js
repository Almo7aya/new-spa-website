import React, { Component } from 'react';


import '../styles/Footer.css';

export default class Footer extends Component {

  render() {
    return (<div className='Footer'>

      <div id='inter'>
        <span></span>
        <span></span>
      </div>

      <div id='icons'>
        <i className='fab fa-2x fa-github' />
        <i className='fab fa-2x fa-facebook' />
        <i className='fab fa-2x fa-codepen' />
        <i className='fa fa-2x fa-at' />
      </div>

    </div>);
  }

}