import {Icon} from '@/components/icon';
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
import {GithubIcon} from 'lucide-react';
import {Lilita_One} from 'next/font/google';

const heading = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  preload: true,
});

export function Navbar() {
  return (
    <styled.header bg="neutral.800">
      <Flex
        h={{
          base: 16,
          lg: 24,
        }}
        px={{
          base: 4,
          lg: 12,
        }}
        alignItems="center"
        maxW="breakpoint-xl"
        mx="auto"
      >
        <Link
          href="/"
          color="transparent"
          fontFamily="var(--font-heading)"
          fontSize={{
            base: '4xl',
            lg: '5xl',
          }}
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
        </Link>

        <Spacer />

        <Tooltip openDelay={0} closeDelay={0}>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com/calvo-jp/pokemon"
              target="_blank"
              rel="noreferrer noopener"
              prefetch={false}
            >
              <Icon w={5} h={5} asChild>
                <GithubIcon />
              </Icon>
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
