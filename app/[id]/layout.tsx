import {
  IconBarChart2,
  IconLightBulb,
  IconRotate3D,
  IconShield,
} from '@/components/icons';
import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {Fragment, PropsWithChildren} from 'react';
import {Recent} from './recent';
import {Trail} from './trail';

export default function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
  return (
    <Fragment>
      <Trail />

      <Flex gap={16} mt={16}>
        <Box w="20rem" flexShrink={0}>
          <Box bg="neutral.800" h="24rem" p={8}>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
              alt=""
              width={500}
              height={500}
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>
          <Recent />
        </Box>

        <Box flexGrow={1}>
          <styled.h1 fontSize="4xl" fontWeight="bold" lineHeight="none">
            Bulbasaur
          </styled.h1>

          <styled.ol display="flex" mt={4} gap={3}>
            <styled.li bg="neutral.800" rounded="full" px={4} py={1}>
              Grass
            </styled.li>
            <styled.li bg="neutral.800" rounded="full" px={4} py={1}>
              Fire
            </styled.li>
          </styled.ol>

          <styled.nav mt={12}>
            <styled.ul
              display="grid"
              gridTemplateColumns="repeat(4,1fr)"
              gap={5}
            >
              {links.map(({path, label, icon: SVGIcon}) => (
                <styled.li key={path} w="full">
                  <Link
                    href={`/${params.id}${path}`}
                    css={{
                      w: 'full',
                      px: 4,
                      py: 3,
                      bg: 'neutral.800',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2.5,
                      transition: 'transform, background',
                      transitionDuration: 'slow',
                      _active: {
                        transform: 'scale(0.95)',
                      },
                      _selected: {
                        bg: 'orange.500',
                        color: 'orange.100',
                      },
                      _focusVisible: {
                        outline: '2px solid token(colors.neutral.500)',
                        outlineOffset: '3px',
                      },
                    }}
                  >
                    <SVGIcon w={5} h={5} pointerEvents="none" />
                    {label}
                  </Link>
                </styled.li>
              ))}
            </styled.ul>
          </styled.nav>

          <Box mt={12}>{children}</Box>
        </Box>
      </Flex>
    </Fragment>
  );
}

const links = [
  {
    icon: IconLightBulb,
    label: 'About',
    path: '/',
  },
  {
    icon: IconBarChart2,
    label: 'Statistics',
    path: '/statistics',
  },
  {
    icon: IconRotate3D,
    label: 'Evolutions',
    path: '/evolutions',
  },
  {
    icon: IconShield,
    label: 'Moves',
    path: '/moves',
  },
];
