import '@/assets/styles/globals.css';
import {cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import {Metadata} from 'next';
import {Fira_Code, Lato} from 'next/font/google';
import {PropsWithChildren} from 'react';
import {Navbar} from './navbar';

const sans = Lato({
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
});

const mono = Fira_Code({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-mono',
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
      className={cx(sans.variable, mono.variable)}
      colorScheme="dark"
      overflowY="scroll"
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
        <styled.main maxW="breakpoint-xl" mx="auto" px={12} py={16}>
          {children}
        </styled.main>
      </styled.body>
    </styled.html>
  );
}
