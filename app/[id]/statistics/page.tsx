import {Box, HStack, VStack, styled} from '@/styled-system/jsx';
import {Fragment} from 'react';

export default function Statistics({params}: {params: {id: string}}) {
  return (
    <Fragment>
      <VStack alignItems="stretch" gap={2}>
        <HStack>
          <Box w={12}>HP</Box>
          <Box h={1} w="full" bg="neutral.700" rounded="full" />
        </HStack>
        <HStack>
          <Box w={12}>ATK</Box>
          <Box h={1} w="full" bg="neutral.700" rounded="full" />
        </HStack>
        <HStack>
          <Box w={12}>DEF</Box>
          <Box h={1} w="full" bg="neutral.700" rounded="full" />
        </HStack>
        <HStack>
          <Box w={12}>SATK</Box>
          <Box h={1} w="full" bg="neutral.700" rounded="full" />
        </HStack>
        <HStack>
          <Box w={12}>SDEF</Box>
          <Box h={1} w="full" bg="neutral.700" rounded="full" />
        </HStack>
        <HStack>
          <Box w={12}>SPD</Box>
          <Box h={1} w="full" bg="neutral.700" rounded="full" />
        </HStack>
      </VStack>

      <Box mt={10}>
        <Box>Weakness</Box>
        <styled.ul mt={4} display="flex" gap={2}>
          <styled.li>Water</styled.li>
          <styled.li>Grass</styled.li>
          <styled.li>Ice</styled.li>
          <styled.li>Bug</styled.li>
          <styled.li>Flying</styled.li>
        </styled.ul>
      </Box>

      <Box mt={10}>
        <Box>Resistance</Box>
        <styled.ul mt={4} display="flex" gap={2}>
          <styled.li>Poision</styled.li>
          <styled.li>Rock</styled.li>
          <styled.li>Steel</styled.li>
          <styled.li>Fire</styled.li>
          <styled.li>Electric</styled.li>
        </styled.ul>
      </Box>
    </Fragment>
  );
}
