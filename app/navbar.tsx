import {styled} from '@/styled-system/jsx';

export function Navbar() {
  return (
    <styled.header
      h={24}
      bg="neutral.800"
      px={8}
      pos="sticky"
      top={0}
      zIndex="sticky"
      display="flex"
      alignItems="center"
    ></styled.header>
  );
}
