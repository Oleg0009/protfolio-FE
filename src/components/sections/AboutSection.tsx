import React, { useCallback, useEffect, useRef, useState } from 'react';

import { TypeAnimation } from 'react-type-animation';


function AboutSection() {
  const [rotation, setRotation] = useState(0);
  const [stopRotate, toggleStopRotate] = useState(false)
  const handleMouseMove = (e: any) => {
    var face = document.getElementById("photoImage");
    if (!face || stopRotate == true) return

    var faceX = face.offsetLeft + face.offsetWidth / 2;
    var faceY = face.offsetTop + face.offsetHeight / 2;
    var dX = faceX - e.clientX;
    var dY = faceY - e.clientY;
    var degree = Math.atan(- dX / dY) * 180 / Math.PI;
    if (dY > 0) { degree += 180 }

    // Update the rotation angle
    setRotation(degree);
  };
  return (
    <section id='section2' onMouseMove={(e) => handleMouseMove(e)}>
      <div className="section-header flex justify-center py-5 shadow-xl shadow-white" >
      </div>
      <div className="container mx-auto h-full flex">
        <div className="image my-auto photoImage"  >
          <img id='photoImage' src="./main-photo.png" alt="" style={{ transform: `rotate(${rotation}deg)` }} />
        </div>
        <div className="text  m-auto max-w-md ">
          <h2 className='text-white text-6xl mb-5 animated-letters font-bold'>
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span className='mr-2'>t</span>
            <span>S</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
          </h2>
          <h5 className='text-2xl'>
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
          <button onClick={() => {
            toggleStopRotate(!stopRotate)
            stopRotate == false && setRotation(0)

          }}>
            {stopRotate == false ? 'stop rotate' : 'rotate'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
