import { useEffect } from 'react';

export const useScrollListener = (callback: () => void) => {
  useEffect(() => {

    const scroller = document.getElementById('scroller')
    const handleScroll = () => {
      callback();
    };

    scroller && scroller.addEventListener('scroll', handleScroll);

    return () => {
      scroller && scroller.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}

