import {Box, Divider, HStack} from '@/styled-system/jsx';
import {Fragment} from 'react';

export default function Pokemon({params}: {params: {id: string}}) {
  return (
    <Fragment>
      <Box>
        Burrows deep underground in arid locations far from water. It only emerges to hunt
        for food.
      </Box>

      <HStack mt={8} w="fit" bg="neutral.800" px={8} py={6} gap={8}>
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Weight
          </Box>
          <Box>120 KG</Box>
        </Box>
        <Divider orientation="vertical" h={8} color="neutral.700" />
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Height
          </Box>
          <Box>6 M</Box>
        </Box>
      </HStack>

      <HStack w="fit" mt={8} bg="neutral.800" px={8} py={6} gap={8}>
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Gender
          </Box>
          <Box>40% Male</Box>
        </Box>
        <Divider orientation="vertical" h={8} color="neutral.700" />
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Egg Group
          </Box>
          <Box>Ground</Box>
        </Box>
        <Divider orientation="vertical" h={8} color="neutral.700" />
        <Box>
          <Box fontSize="xs" color="neutral.400">
            Egg Cycle
          </Box>
          <Box>20</Box>
        </Box>
      </HStack>
    </Fragment>
  );
}
