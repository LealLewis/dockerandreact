import React from 'react';

import './app.css';

import reactImg from '../assets/react.png';
import dockerImg from '../assets/docker.png';


function AppComponent(){
    return(
        <div className="container">
           <img src={reactImg} alt="reactImg" className="reactImg"/>
           <h1 className="title"> Me Encanta React & Docker</h1>
           <img src={dockerImg} alt="dockerImg" className="dockerImg"/>
        </div>
    )
}

export default AppComponent;