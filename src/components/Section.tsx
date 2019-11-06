import React, { ReactElement } from 'react';

interface SectionProps {
  children: ReactElement | ReactElement[];
}

interface ProjectsProps {
  children: ReactElement | ReactElement[];
  size?: 'sm';
}

const Projects: React.FC<ProjectsProps> = ({ children, size }) =>
  <div className={`projects${size ? ` -${size}` : ''}`}>
    { children }
  </div>;

const Text: React.FC<SectionProps> = ({ children }) =>
  <div className='text'>
    { children }
  </div>;

const Container: React.FC<SectionProps> = ({ children }) =>
  <section className='section'>
    <div className='wrap'>
      { children }
    </div>
  </section>;

export default {
  Container,
  Projects,
  Text
};
