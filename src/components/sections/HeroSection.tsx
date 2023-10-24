import React, { useCallback, useEffect, useRef, useState } from 'react';

import Links from '../base/Links';



function HeroSection() {

  return (
    <section id='section1'>
      <div className='relative canvas-container'>
        <div id="pt" className="canvas"><canvas id="canvas" width="973" height="1048" ></canvas></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center'>
            <span className='text-white animated-text-font  animated-text animated-text-first mr-2'>
              Hello,
            </span>
            <span className='text-white animated-text-font animated-text animated-text-second  mr-2'>
              I'm
            </span>
            <span className='text-highlight animated-text-font animated-text animated-text-third font-semibold'>
              Oleg Statkevych
            </span>
          </div>
          <div>
            <span className='text-white animated-text-font animated-text animated-text-fourth'>
              I'm a full-stack web developer.
            </span>
          </div>
          <Links />
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
