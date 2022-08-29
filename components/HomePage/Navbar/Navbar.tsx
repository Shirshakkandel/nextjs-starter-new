import Link from 'next/link';
import React, { useContext, useState } from 'react';

import NavbarComponent from './NavbarComponent';
import { image } from '../../../utils/data/websiteData';

const Navbar = () => {
  return <NavbarComponent navItem={['home', 'roadmap', 'utilities', 'team']} logo={image.logo} />;
};

export default Navbar;
