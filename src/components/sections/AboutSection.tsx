import React, { useCallback, useEffect, useRef, useState } from 'react';

import { TypeAnimation } from 'react-type-animation';


function AboutSection() {

  return (
    <section id='section2'>
      <div className="section-header flex justify-center py-5 shadow-xl shadow-white">
        <h2 className='text-white text-2xl'>
          About Section
        </h2>
      </div>
      <div className="container mx-auto h-full flex">
        <div className="image my-auto photoImage">
          <img src="./main-photo.png" alt="" />
        </div>
        <div className="text  m-auto max-w-sm ">
          <h5 className='text-lg'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Creative Front-End developer',
                1000,
                'Creative Full-Stack developer with 4+ years of experience providing high-impact web solutions for diverse industry organizations. Working with defferent APIs, configuring and connecting to application.'
              ]}
              speed={50}
              cursor={false}
            />

          </h5>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
