import {IconGitBranch} from '@/components/icons';
import {Link} from '@/components/link';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import {Flex, Spacer, VisuallyHidden, styled} from '@/styled-system/jsx';
import {Portal} from '@ark-ui/react';

export function Navbar() {
  return (
    <styled.header bg="neutral.800">
      <Flex h={24} px={12} alignItems="center" maxW="breakpoint-xl" mx="auto">
        <Spacer />
        <Tooltip openDelay={0} closeDelay={0}>
          <TooltipTrigger asChild>
            <Link href="https://github.com/calvo-jp/pokemon">
              <IconGitBranch w={5} h={5} />
              <VisuallyHidden>Github</VisuallyHidden>
            </Link>
          </TooltipTrigger>
          <Portal>
            <TooltipPositioner>
              <TooltipContent>
                <TooltipArrow>
                  <TooltipArrowTip />
                </TooltipArrow>
                <styled.span>Repository</styled.span>
              </TooltipContent>
            </TooltipPositioner>
          </Portal>
        </Tooltip>
      </Flex>
    </styled.header>
  );
}
