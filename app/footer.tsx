import {Link} from '@/components/link';
import {Center, styled} from '@/styled-system/jsx';

export function Footer() {
  return (
    <styled.footer py={8}>
      <Center color="neutral.500" fontSize="sm">
        <styled.span>Made by</styled.span>
        <Link
          href="https://github.com/calvo-jp"
          prefetch={false}
          ml={1}
          _hover={{
            color: 'orange.500',
          }}
        >
          JP Calvo
        </Link>
      </Center>
    </styled.footer>
  );
}
