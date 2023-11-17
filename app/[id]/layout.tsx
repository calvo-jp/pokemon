import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumbs,
} from '@/components/breadcrumbs';
import {
  IconBarChart2,
  IconChevronRight,
  IconLightBulb,
  IconRotate3D,
  IconShield,
  IconVideo,
} from '@/components/icons';
import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {css} from '@/styled-system/css';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {Fragment, PropsWithChildren} from 'react';
import {Recent} from './recent';

export default function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
  const links = [
    {
      icon: IconLightBulb,
      label: 'About',
      path: `/${params.id}`,
    },
    {
      icon: IconBarChart2,
      label: 'Statistics',
      path: `/${params.id}/statistics`,
    },
    {
      icon: IconRotate3D,
      label: 'Evolutions',
      path: `/${params.id}/evolutions`,
    },
    {
      icon: IconShield,
      label: 'Moves',
      path: `/${params.id}/moves`,
    },
    {
      icon: IconVideo,
      label: 'Videos',
      path: `/${params.id}/videos`,
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Pokemons</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbSeparator asChild>
            <IconChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/1">Bulbasaur</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbSeparator asChild>
            <IconChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink currentPage>About</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumbs>

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

          <styled.ul display="flex" mt={4} gap={3}>
            <styled.ol bg="neutral.800" rounded="full" px={4} py={1}>
              Grass
            </styled.ol>
            <styled.ol bg="neutral.800" rounded="full" px={4} py={1}>
              Fire
            </styled.ol>
          </styled.ul>

          <styled.nav mt={12}>
            <styled.ul
              display="grid"
              gridTemplateColumns="repeat(5,1fr)"
              gap={5}
            >
              {links.map(({path, label, icon: SVGIcon}) => (
                <styled.li key={path} w="full">
                  <Link href={path} className={linkClassname}>
                    <SVGIcon w={5} h={5} />
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

const linkClassname = css({
  bg: 'neutral.800',
  px: 4,
  py: 3,
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
  },
  _focusVisible: {
    outline: '2px solid token(colors.neutral.500)',
    outlineOffset: '3px',
  },
});
