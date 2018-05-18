import React, { Component } from 'react';

import '../styles/HeaderSection.css';
import resume from '../AliAlmohayaResume.pdf'

export default class HeaderSection extends Component {

  render() {
    return (<div className='HeaderSection'>

      <p><span className='stat'>const</span> aboutMe <span className='stat'> = </span><span className='stat'> &#123;</span></p>
      <h3>name<span className='stat'>:</span> <span className='stat'>'</span>Ali Almohaya<span className='stat'>'</span>,</h3>
      <h3>skills<span className='stat'>:</span> <span className='stat'>'</span>fullstack dev<span className='stat'>'</span>,</h3>
      <h3>birth<span className='stat'>:</span> <span className='stat'>'</span>1996/12/15<span className='stat'>'</span>,</h3>
      <h3>based<span className='stat'>:</span> <span className='stat'>'</span>Yemen/Sanna<span className='stat'>'</span>,</h3>
      <p className='stat'>&#125;;</p>

    <a href={resume} id='resume-btn'>Resume</a>

    </div>);
  }

}