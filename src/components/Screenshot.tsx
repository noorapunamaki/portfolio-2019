import React from 'react';

import Mobile from '../images/devices/mobile.svg';
import Tablet from '../images/devices/tablet.svg';
import Laptop from '../images/devices/laptop.svg';

interface ScreenshotProps {
  type: 'mobile' | 'tablet' | 'laptop';
  src: string;
  alt: string;
  link?: string;
  label?: string;
}

const device = {
  mobile: Mobile,
  tablet: Tablet,
  laptop: Laptop
}

const Screenshot: React.FC<ScreenshotProps> = ({ type, src, alt, link, label }) =>
  <div className={`screenshot-container -${type}`}>
    <div className='screen'>
      <img src={src} alt={alt} className='img' />
    </div>
    <img src={device[type]} alt='' className='device' />
    {link &&
      <a className='link' href='https://github.com/wappuradio/webbi2019'>{label ? label : 'Lue lisää'}</a>
    }
  </div>;

export default Screenshot;
