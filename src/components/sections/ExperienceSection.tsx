import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function ExperienceSection() {

  return (
    <section id='section4'>
      <div className="section-header flex justify-center py-5 shadow-xl shadow-white">
      </div>
      <div className="container m-auto h-full flex">
        <div className="content flex flex-col m-auto max-w-full w-full">
          <h2 className='text-white text-6xl animated-letters font-bold'>
            <span>E</span>
            <span>x</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span>i</span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>e</span>
          </h2>
          <div className=' mt-10 max-w-full w-full '>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ExperienceSection;
