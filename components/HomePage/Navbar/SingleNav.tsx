import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { NavbarContext } from '../../../utils/context/NavbarContext';

export const Nav: FC<{ title: 'home' | 'roadmap' | 'utilities' | 'team' | 'faq' }> = ({ title }) => {
  const { setCurrentSection, currentSection } = useContext(NavbarContext);
  return (
    <li onClick={() => setCurrentSection(title)}>
      <Link href={`#${title}`}>
        <a className={`${currentSection === title ? 'text-secondary' : 'text-white'} px-4 font-neuro uppercase hover:text-secondary`}>{title}</a>
      </Link>
    </li>
  );
};
