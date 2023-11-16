import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';
import {item, link, root, separator} from './breadcrumbs.recipe';

export const Breadcrumbs = styled(ark.div, root);
export const BreadcrumbItem = styled(ark.div, item);
export const BreadcrumbLink = styled(ark.a, link);
export const BreadcrumbSeparator = styled(ark.svg, separator);
