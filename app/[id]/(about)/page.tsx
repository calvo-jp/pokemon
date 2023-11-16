import {Box, HStack} from '@/styled-system/jsx';
import {Fragment} from 'react';

export default function Pokemon({params}: {params: {id: string}}) {
  return (
    <Fragment>
      <Box>
        Burrows deep underground in arid locations far from water. It only emerges to hunt
        for food.
      </Box>

      <HStack mt={8}>
        <Box>
          <Box>Weight</Box>
          <Box>120 KG</Box>
        </Box>
        <Box>
          <Box>Height</Box>
          <Box>6 M</Box>
        </Box>
      </HStack>

      <HStack mt={8}>
        <Box>Breed</Box>
        <HStack>
          <Box>Gender</Box>
          <Box>40% Male</Box>
        </HStack>
        <HStack>
          <Box>Egg Group</Box>
          <Box>Ground</Box>
        </HStack>
        <HStack>
          <Box>Egg Cycle</Box>
          <Box>20</Box>
        </HStack>
      </HStack>
    </Fragment>
  );
}
