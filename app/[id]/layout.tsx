import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumbs,
} from '@/lib/breadcrumbs';
import {capitalize} from '@/lib/capitalize';
import {IconChevronRight} from '@/lib/icons';
import {Image} from '@/lib/image';
import {Link} from '@/lib/link';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {headers} from 'next/headers';
import {Fragment, PropsWithChildren} from 'react';
import {Recent} from './recent';

export default function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
  const pathname = headers().get('x-pathname');

  const links = [
    {
      label: 'About',
      path: `/${params.id}`,
    },
    {
      label: 'Statistics',
      path: `/${params.id}/statistics`,
    },
    {
      label: 'Evolutions',
      path: `/${params.id}/evolutions`,
    },
    {
      label: 'Moves',
      path: `/${params.id}/moves`,
    },
    {
      label: 'Videos',
      path: `/${params.id}/videos`,
    },
  ];

  const current = links.find((link) => link.path === pathname) ?? links[0];

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
          <BreadcrumbLink currentPage>{capitalize(current.label)}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumbs>

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
            <styled.ol bg="neutral.800" rounded="full" px={4} py={1}>
              Grass
            </styled.ol>
            <styled.ol bg="neutral.800" rounded="full" px={4} py={1}>
              Fire
            </styled.ol>
          </styled.ul>

          <styled.nav mt={12}>
            <styled.ul display="grid" gridTemplateColumns="repeat(5,1fr)" gap={5}>
              {links.map((link) => (
                <styled.li key={link.path} w="full">
                  <Link
                    href={link.path}
                    bg="neutral.800"
                    px={4}
                    py={3}
                    display="block"
                    textAlign="center"
                  >
                    {link.label}
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
