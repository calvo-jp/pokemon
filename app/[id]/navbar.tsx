'use client';

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumbs,
} from '@/lib/breadcrumbs';
import {capitalize} from '@/lib/capitalize';
import {IconChevronRight} from '@/lib/icons';
import {Link} from '@/lib/link';
import {useSelectedLayoutSegments} from 'next/navigation';

export function Navbar() {
  const segments = useSelectedLayoutSegments();
  const segment = segments.at(0)?.replace(/[()]/g, '') ?? 'about';

  return (
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
        <BreadcrumbLink currentPage>{capitalize(segment)}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
