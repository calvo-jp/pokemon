'use client';

import {
  BreadcrumbItem,
  BreadcrumbItems,
  BreadcrumbLink,
  Breadcrumbs,
} from '@/components/breadcrumbs';
import {Link} from '@/components/link';
import {capitalize} from '@/utils/capitalize';
import {useSelectedLayoutSegment} from 'next/navigation';

export function Trail() {
  const segment = useSelectedLayoutSegment();
  const current = segment?.replace(/[()]/g, '') ?? 'about';

  return (
    <Breadcrumbs>
      <BreadcrumbItems>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Pokemons</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/1">Bulbasaur</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink currentPage>{capitalize(current)}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbItems>
    </Breadcrumbs>
  );
}
