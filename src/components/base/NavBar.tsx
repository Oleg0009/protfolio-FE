
import { useEffect, useState } from 'react';
import { useScrollListener } from '../../helpers/customHooks';




const NavBar = () => {
  const loopRange = Array.from({ length: 5 }, (_, index) => index + 1);
  const [sections, updateSections]: any = useState()
  const scrollTo = (e: any) => {
    console.log('target', e.target.ariaLabel);
    if (!e.target.ariaLabel) {
      return
    }
    const section = document.getElementById(e.target.ariaLabel)
    section && section.scrollIntoView({
      behavior: "smooth"
    })
  }

  const handleScroll = () => {
    if (!sections) {
      const sections: any = document.querySelectorAll('section')
      updateSections(sections)
    }
    if (!sections) {
      return
    }
    const scroller = document.getElementById('scroller')
    sections.forEach((element: HTMLElement, index: number) => {
      const navEl = document.querySelector(`[aria-label="section${index + 1}"]`);
      scroller && scroller.scrollTop == element.offsetTop ? navEl?.classList.add('active') : element.classList.remove('active')
      scroller && scroller.scrollTop == element.offsetTop ? element.classList.add('active') : navEl?.classList.remove('active')

      scroller && scroller.scrollTop == element.offsetTop && !element.classList.contains('scrolled') && element.classList.add('scrolled')
    });
  };

  useScrollListener(handleScroll)


  return (
    <nav className='nav-bar'>
      <ul>
        {loopRange.map((index: number) => (
          <li key={index}>
            <button className={`nav-btn ${index == 1 ? 'active' : ''}`} aria-label={`section${index}`} onClick={(e) => scrollTo(e)}></button>
          </li>
        ))}
      </ul>
    </nav >
  );
}

export default NavBar;
