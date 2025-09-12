"use client";

import { animate, stagger, utils } from 'animejs';

// 

import { useEffect, useRef } from 'react';

const $squares = utils.$('.square');

function animateGrid() {
  animate($squares, {
    scale: [
      { to: [0, 1.25] },
      { to: 0 }
    ],
    boxShadow: [
      { to: '0 0 1rem 0 currentColor' },
      { to: '0 0 0rem 0 currentColor' }
    ],
    delay: stagger(100, {
      grid: [11, 4],
      from: utils.random(0, 11 * 4)
    }),
    onComplete: animateGrid
  });
}

// animateGrid();

export default function AnimatedGrid() {
  useEffect(() => {
    animateGrid();
    // i want to remove the animation when the component unmounts
    // return () => {
    //   animateGrid();
    // };
    }, []);
  return (
    <div className='w-full flex flex-row flex-wrap justify-center  relative z-10'>
      <div className="small justified row">
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
      </div>
      <div className="small justified row">
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
      </div>
      <div className="small justified row">
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
      </div>
      <div className="small justified row">
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
        <div className="square h-16 w-16 bg-blue-500"></div>
      </div>
    </div>
  );
}