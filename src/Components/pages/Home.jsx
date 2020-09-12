import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

function handleStart() {
  window.location = '/MediaCenterShow'
}

function Home() {
  return(
    <div className="mediaCenter-home">
      <h1>Welcome !</h1>
      <h3>This App is using: <span>React</span>, <span>MongoDB</span> & <span>NodeJS</span></h3>
      <figure>
        <img src="./img/react.png" alt="react" />
        <img src="./img/mongodb.png" alt="mongoDb" />
        <img src="./img/node.png" alt="nodeJS" />
      </figure>
      <div>
        <h5>Abd-elmonem Salem</h5>
        <h6>SR: Front-end Developer</h6>
      </div>
      <button type="button" onClick={handleStart}>Start <FontAwesomeIcon icon={faSignInAlt}/></button>
    </div>
  )
}

export default Home;