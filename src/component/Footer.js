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
        <a target='_target' href='https://github.com/almo7aya' >
          <i className='fab fa-2x fa-github' />
        </a>
        <a target='_target' href='https://fb.com/almo7aya' >
          <i className='fab fa-2x fa-facebook' />
        </a>
        <a target='_target' href='https://twitter.com/ali_almohaya' >
          <i className='fab fa-2x fa-twitter' />
        </a>
        <a target='_target' href='https://codepen.io/almo7aya' >
          <i className='fab fa-2x fa-codepen' />
        </a>
        <a target='_target' href='https://medium.com/@alialmohaya' >
          <i className='fab fa-2x fa-medium' />
        </a>
        <a target='_target' href='mailto:alialmohaya@gmail.com' >
          <i className='fa fa-2x fa-at' />
        </a>
      </div>

    </div>);
  }

}