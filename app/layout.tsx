import '@/assets/styles/globals.css';
import {styled} from '@/styled-system/jsx';
import {Metadata} from 'next';
import {Lato} from 'next/font/google';
import {PropsWithChildren} from 'react';
import {Footer} from './footer';
import {Navbar} from './navbar';

const sans = Lato({
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Pokemon',
    template: '%s | Pokemon',
  },
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <styled.html
      lang="en"
      className={sans.variable}
      colorScheme="dark"
      scrollBehavior="smooth"
    >
      <styled.body
        bg="neutral.900"
        color="neutral.100"
        fontFamily="sans"
        minH="dvh"
        minW="breakpoint-lg"
      >
        <Navbar />
        <styled.main maxW="breakpoint-lg" mx="auto" px={12} py={16}>
          {children}
        </styled.main>
        <Footer />
      </styled.body>
    </styled.html>
  );
}
