import React from 'react';

import Mobile from '../images/devices/mobile.svg';
import Tablet from '../images/devices/tablet.svg';
import Laptop from '../images/devices/laptop.svg';
import FlyerCover from '../images/devices/flyercover.svg';
import FlyerOpen from '../images/devices/flyeropen.svg';
import Magazine from '../images/devices/magazine.svg';

interface ScreenshotProps {
  type: 'mobile' | 'tablet' | 'laptop' | 'flyercover' | 'flyeropen' | 'magazine';
  src: string;
  alt: string;
  link?: string;
  label?: string;
}

const device = {
  mobile: Mobile,
  tablet: Tablet,
  laptop: Laptop,
  flyercover: FlyerCover,
  flyeropen: FlyerOpen,
  magazine: Magazine
}

const Screenshot: React.FC<ScreenshotProps> = ({ type, src, alt, link, label }) =>
  <div className={`screenshot-container -${type}`}>
    <div className='screen'>
      <img src={src} alt={alt} className='img' />
    </div>
    <img src={device[type]} alt='' className='device' />
    {link &&
      <a className='link' href={link}>{label ? label : 'Lue lisää'}</a>
    }
  </div>;

export default Screenshot;
