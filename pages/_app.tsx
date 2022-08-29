import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Footer, Navbar } from '../components/HomePage';
import NavbarContextProvider from '../utils/context/NavbarContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarContextProvider>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </NavbarContextProvider>
  );
}

export default MyApp;
