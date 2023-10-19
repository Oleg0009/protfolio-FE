import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import github from '../../assets/github.svg'
import google from '../../assets/google.svg'
import linkedin from '../../assets/linkedin.svg'

import { Link } from "react-router-dom";


const Links = () => {




  return (
    <div className='flex fixed bottom-0 my-10'>
      <a href="https://github.com/Oleg0009" target='blank'>
        <img src={github} alt="" />
      </a>
      <a href="mailto:olegstatkevychb@gmail.com">
        <img src={google} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/oleg-statkevych-58bb1614b/" target='blank'>
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
}

export default Links;
