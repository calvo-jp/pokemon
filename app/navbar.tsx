import {IconGitBranch} from '@/components/icons';
import {Link} from '@/components/link';
import {Spacer, VisuallyHidden, styled} from '@/styled-system/jsx';

export function Navbar() {
  return (
    <styled.header
      h={24}
      bg="neutral.800"
      px={12}
      display="flex"
      alignItems="center"
    >
      <Spacer />
      <Link href="https://github.com/calvo-jp/pokemon">
        <IconGitBranch w={5} h={5} />
        <VisuallyHidden>Github</VisuallyHidden>
      </Link>
    </styled.header>
  );
}
