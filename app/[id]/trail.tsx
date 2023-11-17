'use client';

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumbs,
} from '@/components/breadcrumbs';
import {IconChevronRight} from '@/components/icons';
import {Link} from '@/components/link';
import {capitalize} from '@/utils/capitalize';
import {useSelectedLayoutSegment} from 'next/navigation';

export function Trail() {
  const segment = useSelectedLayoutSegment();
  const current = segment?.replace(/[()]/g, '') ?? 'about';

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
        <BreadcrumbLink currentPage>{capitalize(current)}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
