import {styled} from '@/styled-system/jsx';
import link from 'next/link';

export const Link = styled(
	link,
	{},
	{
		shouldForwardProp(key) {
			return ['href', 'replace', 'scroll', 'prefetch'].includes(key);
		},
	},
);
