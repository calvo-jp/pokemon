import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumbs,
} from '@/lib/breadcrumbs';
import {IconChevronRight} from '@/lib/icons';
import {Link} from '@/lib/link';
import {Box, Flex} from '@/styled-system/jsx';
import {Fragment, PropsWithChildren} from 'react';
import {Recent} from './recent';

export default function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
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
          <BreadcrumbLink>Bulbasaur</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbSeparator asChild>
            <IconChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/1">About</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumbs>

      <Flex gap={16} mt={8}>
        <Box>
          <Recent />
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Fragment>
  );
}
