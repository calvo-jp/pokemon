import {Image} from '@/lib/image';
import {Box, Flex, styled} from '@/styled-system/jsx';
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

      <Flex gap={16} mt={16}>
        <Box w="20rem">
          <Box bg="neutral.800" h="24rem" p={8}>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
              alt=""
              width={500}
              height={500}
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
          <Recent />
        </Box>

        <Box flexGrow={1}>
          <styled.h1 fontSize="4xl" fontWeight="bold" lineHeight="none">
            Bulbasaur
          </styled.h1>

          <styled.ul display="flex" mt={4} gap={3}>
            <styled.li bg="neutral.800" rounded="full" px={4} py={1}>
              Grass
            </styled.li>
            <styled.li bg="neutral.800" rounded="full" px={4} py={1}>
              Fire
            </styled.li>
          </styled.ul>

          <Box>{children}</Box>
        </Box>
      </Flex>
    </Fragment>
  );
}
