import React from 'react';

import Mobile from '../images/devices/mobile.svg';
import Tablet from '../images/devices/tablet.svg';
import Laptop from '../images/devices/laptop.svg';
import FlyerCover from '../images/devices/flyercover.svg';
import FlyerOpen from '../images/devices/flyeropen.svg';
import Magazine from '../images/devices/magazine.svg';

interface LinkProps {
  href?: string;
  label: string;
  pdf?: string;
}

interface ScreenshotProps {
  type: 'mobile' | 'tablet' | 'laptop' | 'flyercover' | 'flyeropen' | 'magazine';
  src: string;
  alt: string;
  link?: LinkProps;
}

const device = {
  mobile: Mobile,
  tablet: Tablet,
  laptop: Laptop,
  flyercover: FlyerCover,
  flyeropen: FlyerOpen,
  magazine: Magazine
}

const Screenshot: React.FC<ScreenshotProps> = ({ type, src, alt, link }) =>
  <div className={`screenshot-container -${type}`}>
    <div className='screen'>
      <img src={src} alt={alt} className='img' />
    </div>
    <img src={device[type]} alt='' className='device' />
    {link &&
      <a className='link' href={link.pdf ? `../projects/${link.pdf}.pdf` : link.href} target='_blank' rel='noopener noreferrer'>
        {link.label}
      </a>}
  </div>;

export default Screenshot;
