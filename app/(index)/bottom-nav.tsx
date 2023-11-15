'use client';

import {IconChevronLeft, IconChevronRight} from '@/lib/icons';
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from '@/lib/pagination';
import {Fragment} from 'react';

export function BottomNav() {
  return (
    <Pagination mt={12} pageSize={20} count={1000}>
      {(ctx) => (
        <Fragment>
          <PaginationPrevTrigger>
            <IconChevronLeft w={5} h={5} />
          </PaginationPrevTrigger>

          {ctx.pages.map((page, index) => {
            if (page.type === 'page') {
              return (
                <PaginationItem key={index} {...page}>
                  {page.value}
                </PaginationItem>
              );
            }

            return (
              <PaginationEllipsis key={index} index={index}>
                ...
              </PaginationEllipsis>
            );
          })}

          <PaginationNextTrigger>
            <IconChevronRight w={5} h={5} />
          </PaginationNextTrigger>
        </Fragment>
      )}
    </Pagination>
  );
}
