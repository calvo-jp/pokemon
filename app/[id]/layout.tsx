import {Box, Flex} from '@/styled-system/jsx';
import {Fragment, PropsWithChildren} from 'react';
import {Recent} from './(about)/recent';
import {Navbar} from './navbar';

export default function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
  return (
    <Fragment>
      <Navbar />

      <Flex gap={16} mt={8}>
        <Box>
          <Recent />
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Fragment>
  );
}
