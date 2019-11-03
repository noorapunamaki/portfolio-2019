import React from 'react';

interface IllustrationProps {
  name: 'Research' | 'Interface' | 'Code';
}

const SVG = {
  Research: (
    <g>
      <path className='bg' d='M8 65a58 58 0 01112-21.4c8.4 21.5 33 29.3 33 52.4a58 58 0 01-112 21.4C32.7 95.9 8 88 8 65z'/>
      <path className='line' d='M88.3 123a20 20 0 01-3.5 12.2 26 26 0 00-3.5-6.5A43 43 0 0161 133c-19.7 0-32-8.7-32-24s12.3-24 32-24 32 8.7 32 24c0 5.6-1.6 10.3-4.7 14h0zM20.7 62c-3-3.7-4.7-8.4-4.7-14 0-15.3 12.3-24 32-24s32 8.7 32 24-12.3 24-32 24a43 43 0 01-20.3-4.3 26 26 0 00-3.5 6.5A20.2 20.2 0 0120.7 62h0z'/>
      <circle cx='38' cy='49' r='3' className='fill'/>
      <circle cx='48' cy='49' r='3' className='fill'/>
      <circle cx='58' cy='49' r='3' className='fill'/>
      <path className='fill' d='M68.3 98c4.3 0 7.7 4 7.7 8s-1.4 6.2-4.5 9.8A24.4 24.4 0 0161 122c-1.4 0-7.6-3-10.5-6.2-3.1-3.6-4.5-5.8-4.5-9.8 0-4 3.4-8 7.7-8 3.4 0 6.2 3 7.3 5.9 1-3 4-5.9 7.3-5.9z'/>
      <path className='line' d='M98.6 24l32 .6-.5 26c0 2-.4 4-1.1 6L97 56c.7-2 1-4 1.1-6l.5-26zM111.1 65.4l32-.3.3 26c0 2-.3 4-1 6l-32 .3c.7-2 1-4 1-6l-.3-26zM104.4 106.2l32 .2-.2 26c0 2-.4 4-1 6l-32-.3c.6-2 1-4 1-6l.2-26z'/>
      <path className='accent' d='M107 42.3c0 2 3 3.5 4.5-3s-5-5-2.3 0c2.8 5 4.8 5.5 5.8 2.5s-2-4-2-1.5 3 4.5 4 3.5 1.5 0 3 0 2.5-2.2 1.5-2.5c-1-.3-3 1.5 2 2.5'/>
    </g>
  ),
  Interface: (
    <g>
      <path className='bg' d='M32.2 22.3c22.6-22.7 67.4-22.7 90 0 17.3 17.3 29.4 38.8 20.3 60-9.2 21.2 2.6 38-13.7 54.4-22.6 22.7-75.4 22.7-98 0A62.1 62.1 0 0119.5 70c9.1-21.2-3.6-31.4 12.7-47.7z'/>
      <rect width='88' height='64' x='40' y='54' className='line' rx='2'/>
      <path className='line' d='M40 104h-6a2 2 0 01-2-2V42c0-1.1.9-2 2-2h84a2 2 0 012 2v12'/>
      <circle cx='47' cy='61' r='3' className='line'/>
      <circle cx='39' cy='47' r='3' className='line'/>
      <circle cx='57' cy='61' r='3' className='line'/>
      <circle cx='49' cy='47' r='3' className='line'/>
      <circle cx='67' cy='61' r='3' className='line'/>
      <circle cx='59' cy='47' r='3' className='line'/>
      <rect width='24' height='46' x='44' y='68' className='line' rx='1'/>
      <rect width='52' height='8' x='72' y='68' className='line' rx='1'/>
      <rect width='24' height='16' x='72' y='98' className='line' rx='1'/>
      <rect width='24' height='16' x='100' y='98' className='line' rx='1'/>
      <circle cx='80' cy='87' r='7' className='accent'/>
      <circle cx='98' cy='87' r='7' className='accent'/>
      <circle cx='116' cy='87' r='7' className='accent'/>
      <path className='fill' d='M91.4 108.5l3.7 7.9-4.6 2.1-3.7-7.9-6.1 4.8L80 90l19 16.9z'/>
    </g>
  ),
  Code: (
    <g>
      <path className='bg' d='M153 57c0 23.1-24.6 39-33 60.4-8.6 21.4-37.5 36.6-62 36.6-32 0-50-18-50-50 0-23.1 16.6-31 25-52.4C41.7 30.2 54.6 7 79 7c32 0 74 18 74 50z'/>
      <path className='accent' d='M22 48l-3.8-3.4a.9.9 0 010-1.2L22 40m82 8c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4zm28-4c0-3.2-.8-4-4-4s-4 .8-4 4 .8 4 4 4m10-8l3.8 3.4c.3.3.3.9 0 1.2L138 48M88 80c0 3.2.8 4 4 4s4-.8 4-4-.8-4-4-4m12 8c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4zm16-4c0-3.2-.8-4-4-4s-4 .8-4 4 .8 4 4 4M90 94l3.8 3.4c.3.3.3.9 0 1.2L90 102m-7-2h-6m0-4h6m33-48c3.2 0 4-.8 4-4m-4-4c-3.2 0-4 .8-4 4'/>
      <path className='line' d='M32 48c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4zm12-8c-3.2 0-4 .8-4 4s.8 4 4 4 4-.8 4-4m16 0c0 3.2.8 4 4 4s4-.8 4-4-.8-4-4-4m12 8c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4zM45.5 68c-1 0-1.8-.9-1.7-1.7.3-2.3-.2-3.7-1.3-4.3 1.1-.6 1.6-2 1.3-4.3-.1-.8.8-1.7 1.7-1.7M56 66c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4zm12-8c-3.2 0-4 .8-4 4s.8 4 4 4 4-.8 4-4m8 4c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4m26.5-6c1 0 1.8.9 1.7 1.7-.3 2.3.2 3.7 1.3 4.3-1.1.6-1.6 2-1.3 4.3.1.8-.8 1.7-1.7 1.7m-57 18c-1 0-1.8-.9-1.7-1.7.3-2.3-.2-3.7-1.3-4.3 1.1-.6 1.6-2 1.3-4.3-.1-.8.8-1.7 1.7-1.7M56 84c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4zm73.5-10c-1.7 1-2.5 3-2.5 6s.8 5 2.5 6M72 98c0-3.2-.8-4-4-4s-4 .8-4 4 .8 4 4 4m47-10c1.7 1 2.5 3 2.5 6s-.8 5-2.5 6m11.5-12c1 0 1.8.9 1.7 1.7-.3 2.3.2 3.7 1.3 4.3-1.1.6-1.6 2-1.3 4.3.1.8-.8 1.7-1.7 1.7M95 46h-6m0-4h6m-3 24c3.2 0 4-.8 4-4m-4-4c-3.2 0-4 .8-4 4M68 84c3.2 0 4-.8 4-4m-4-4c-3.2 0-4 .8-4 4m15.9 4h.2m23.8 18h.2m-3.2 0h.2m5.8 0h.2'/>
      <path className='accent' d='M22 120l-3.8-3.4a.9.9 0 010-1.2L22 112'/>
      <path className='line' d='M30 121l4-10'/>
      <path className='line' d='M44 120c3.2 0 4-.8 4-4s-.8-4-4-4-4 .8-4 4 .8 4 4 4z'/>
      <path className='line' d='M56 112c-3.2 0-4 .8-4 4s.8 4 4 4 4-.8 4-4'/>
      <path className='accent' d='M66 112l3.8 3.4c.3.3.3.9 0 1.2L66 120'/>
      <path className='fill' d='M75 110h8v12h-8z'/>
    </g>)
};

const Illustration: React.FC<IllustrationProps> = ({ name }) =>
  <svg className='illustration-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'>
    <defs>
      <radialGradient id='bg-gradient' className='gradient' cx='25%' cy='25%' r='75%' fx='25%' fy='25%'>
        <stop offset='0%' />
        <stop offset='100%' />
      </radialGradient>
    </defs>
    {SVG[name]}
  </svg>;

export default Illustration;
