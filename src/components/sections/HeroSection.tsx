import React, { useCallback, useEffect, useRef, useState } from 'react';

import Links from '../base/Links';



function HeroSection() {

  return (
    <div>
      <div id="pt" className="canvas"><canvas id="canvas" width="973" height="1048" ></canvas></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
          <span className='text-white animated-text mr-3 '>
            Hello, I'm
          </span>
          <span className='text-highlight animated-text-2 '>
            Oleg Statkevych
          </span>
        </div>
        <div>
          <span className='text-white animated-text-3'>
            I'm a full-stack web developer.
          </span>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default HeroSection;
