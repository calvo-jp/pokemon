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
import {Lilita_One} from 'next/font/google';

const heading = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  preload: true,
});

export function Navbar() {
  return (
    <styled.header bg="neutral.800">
      <Flex h={24} px={12} alignItems="center" maxW="breakpoint-xl" mx="auto">
        <styled.h3
          color="transparent"
          fontFamily="var(--font-heading)"
          fontSize="5xl"
          fontWeight="black"
          lineHeight="none"
          textTransform="uppercase"
          bgGradient="to-r"
          gradientFrom="pink.500"
          gradientVia="orange.500"
          gradientTo="purple.500"
          backgroundClip="text"
          className={heading.className}
        >
          Pokemon
        </styled.h3>

        <Spacer />

        <Tooltip openDelay={0} closeDelay={0}>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com/calvo-jp/pokemon"
              target="_blank"
              rel="noreferrer noopener"
              prefetch={false}
            >
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
