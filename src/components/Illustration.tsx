import React, { ReactElement } from 'react';

interface IllustrationContainerProps {
  children: ReactElement | ReactElement[];
}
interface IllustrationGroupProps {
  src: string[];
  size: 'sm' | 'md' | 'lg';
}

interface IllustrationProps {
  src: string;
  size: 'sm' | 'md' | 'lg';
}

const Container: React.FC<IllustrationContainerProps> = ({ children }) =>
  <div className='illustration-container'>
    <div className='wrap'>
      {children}
    </div>
  </div>;

const Item: React.FC<IllustrationProps> = ({ src, size }) =>
  <img className={`illustration -${size}`} src={src} alt='' />;

const Group: React.FC<IllustrationGroupProps> = ({ src, size }) =>
  <div className='group'>
    {src.map(i =>
      <Item key={i} src={i} {...{size}} />
    )}
  </div>;

export default {
  Container,
  Group
};
