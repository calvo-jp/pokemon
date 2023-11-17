import {IconMoveRight} from '@/components/icons';
import {Image} from '@/components/image';
import {Box, HStack, VStack, styled} from '@/styled-system/jsx';
import {Fragment} from 'react';

export default function Evolutions({params}: {params: {id: string}}) {
  return (
    <Fragment>
      <Box>
        <styled.p>
          There are currently a total of 2 Pokémon in the Sandshrew family.
        </styled.p>
        <styled.p>Sandshrew evolves from which costs 25 Candy</styled.p>
      </Box>
      <VStack
        mt={8}
        bg="neutral.800"
        py={16}
        px={24}
        gap={8}
        alignItems="stretch"
      >
        <Item />
        <Item />
        <Item />
      </VStack>
    </Fragment>
  );
}

function Item() {
  return (
    <HStack>
      <Box w={32} h={32} p={4} bg="neutral.700">
        <Box bg="neutral.600" rounded="full">
          <Image
            src="https://pokedex-ohayo003.vercel.app/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fother%2Fhome%2F27.png&w=1920&q=75"
            alt=""
            width={250}
            height={250}
            objectFit="cover"
            w="full"
            h="full"
          />
        </Box>
      </Box>
      <VStack flexGrow={1}>
        <Box>11</Box>
        <IconMoveRight w={6} h={6} />
      </VStack>
      <Box w={32} h={32} p={4} bg="neutral.700">
        <Box bg="neutral.600" rounded="full">
          <Image
            src="https://pokedex-ohayo003.vercel.app/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fother%2Fhome%2F28.png&w=1920&q=75"
            alt=""
            width={250}
            height={250}
            objectFit="cover"
            w="full"
            h="full"
          />
        </Box>
      </Box>
    </HStack>
  );
}
