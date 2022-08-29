import Hamburger from 'hamburger-react';
import React, { FC, useContext } from 'react';
import { NavbarContext } from '../../../utils/context/NavbarContext';
import useWindowSize from '../../../utils/Hook/useWindowSize';
import { Flex } from '../../../utils/styledComponents';
import { Nav } from './SingleNav';
import { AnimatePresence, motion } from 'framer-motion';

const NavbarComponent = ({ navItem, logo }) => {
  const { toggleIsOpen, isOpen } = useContext(NavbarContext);
  const { width } = useWindowSize();

  return (
    <nav className="bg-black smallSection  min-h-[10vh] py-4">
      <Flex className="flex justify-between section-wrapper flex-center">
        {/*TODO: 1)Left image */}
        <div className="w-[150px] h-auto hover:scale-105 cursor-pointer transition">
          <img className="object-cover w-full h-full" src={logo} alt="" />
        </div>

        {/*TODO: 2) Right section */}
        <div className="non-mobile">
          <ul className="h-full flex-center navbar">
            {navItem.map(item => (
              <Nav title={item} key={item} />
            ))}
          </ul>
        </div>

        <div className=" only-mobile text-secondary">
          <Hamburger toggled={isOpen} toggle={toggleIsOpen} />
        </div>

        {/*TODO: 3)Mobile section */}
      </Flex>

      <AnimatePresence>
        {isOpen && width! < 1024 && (
          <motion.ul
            layout
            initial={{ opacity: 0, height: '0vh' }}
            animate={{ opacity: 1, height: '60vh' }}
            exit={{ opacity: 0, height: '0vh' }}
            transition={{ type: 'tween' }}
            className="flex flex-col space-y-[5%]  bg-black  w-full  justify-center h-[60vh] lg:h-[0vh] "
          >
            {navItem.map(item => (
              <Nav title={item} key={item} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarComponent;
