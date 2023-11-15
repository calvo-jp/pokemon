import {styled} from '@/styled-system/jsx';
import {PropsWithChildren} from 'react';

export default function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
  return <styled.div>{children}</styled.div>;
}
