'use client';

import {styled} from '@/styled-system/jsx';
import {Pagination as parts} from '@ark-ui/react';
import {ellipsis, item, nextTrigger, prevTrigger, root} from './pagination.recipe';

export const Pagination = styled(parts.Root, root);
export const PaginationItem = styled(parts.Item, item);
export const PaginationNextTrigger = styled(parts.NextTrigger, nextTrigger);
export const PaginationPrevTrigger = styled(parts.PrevTrigger, prevTrigger);
export const PaginationEllipsis = styled(parts.Ellipsis, ellipsis);
