import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {AspectRatio, Box, Grid, styled} from '@/styled-system/jsx';
import {Fragment} from 'react';
import {BottomNav} from './bottom-nav';
import {TopNav} from './top-nav';

export default async function Pokemons() {
  return (
    <Fragment>
      <TopNav />

      <Box mt={12} color="neutral.300" fontSize="sm" fontStyle="italic">
        Showing 1-20 of 1000
      </Box>

      <Grid
        gridTemplateColumns="repeat(auto-fill,minmax(14rem,1fr))"
        mt={4}
        gap={5}
      >
        {Array.from({length: 20}).map((_, i) => (
          <Pokemon key={i} />
        ))}
      </Grid>

      <BottomNav />
    </Fragment>
  );
}

function Pokemon() {
  return (
    <Link
      href="/1"
      bg="neutral.800"
      py={6}
      transition="transform token(durations.slow)"
      _active={{
        transform: 'scale(0.95)',
      }}
      _focusVisible={{
        outline: '2px solid token(colors.neutral.500)',
        outlineOffset: '3px',
      }}
    >
      <AspectRatio mx={6} bg="neutral.700" rounded="full" ratio={1}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png"
          alt=""
          width={400}
          height={400}
          draggable={false}
          w="full"
        />
      </AspectRatio>

      <Box px={6} mt={5}>
        <styled.h2 fontSize="2xl">Bulbasor</styled.h2>

        <styled.ul mt={2} display="flex" gap={2} flexWrap="wrap" fontSize="sm">
          <styled.li bg="neutral.700" px={2.5} py={0.5} rounded="full">
            Grass
          </styled.li>
          <styled.li bg="neutral.700" px={2.5} py={0.5} rounded="full">
            Poision
          </styled.li>
        </styled.ul>
      </Box>
    </Link>
  );
}
