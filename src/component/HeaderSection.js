import React, { Component } from 'react';

import '../styles/HeaderSection.css';

export default class HeaderSection extends Component {

  render() {
    return (<div className='HeaderSection'>

      <p>const aboutMe = &#123;</p>
      <h3>name: 'Ali Almohaya',</h3>
      <h3>skills: 'Web Dev/Des',</h3>
      <h3>birth: '1996/12/15',</h3>
      <h3>based: 'Yemen/Sanna',</h3>
      <p>&#125;;</p>

    </div>);
  }

}


const aboutMe = {
  name: 'Ali Almohaya',
  skills: 'Web Dev/Des',
  dayOfBirth: '1996/12/15',
};