import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

const NavbarContextProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return <NavbarContext.Provider value={{ currentSection, setCurrentSection, isOpen, toggleIsOpen }}>{children}</NavbarContext.Provider>;
};

export default NavbarContextProvider;
