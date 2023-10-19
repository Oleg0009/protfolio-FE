import React, { useEffect, useRef } from 'react';

import Links from '../base/Links';


function HeroSection() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  const draw = (ctx: any) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas != null) {
      const context = canvas.getContext('2d');
      // Perform your canvas operations here using the context
      context && draw(context)
    }
  }, [draw]);


  return (
    <div>
      <canvas ref={canvasRef}>

      </canvas>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
          <span className='text-white animated-text mr-3 xsm:text-xs'>
            Hello, I'm
          </span>
          <span className='text-highlight animated-text-2'>
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
