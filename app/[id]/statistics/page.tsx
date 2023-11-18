import {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressValueText,
} from '@/components/progress';
import {Box, VStack, styled} from '@/styled-system/jsx';
import {Fragment} from 'react';
import {getPokemon} from '../utils';

export default async function Statistics({params}: {params: {id: string}}) {
  const pokemon = await getPokemon(parseInt(params.id));

  return (
    <Fragment>
      <VStack alignItems="stretch" gap={3} bg="neutral.800" p={8}>
        {pokemon?.stats.map((obj) => {
          if (!obj.stat) return null;

          return (
            <Progress key={obj.id}>
              <ProgressLabel w={12}>{formatStat(obj.stat.name)}</ProgressLabel>
              <ProgressValue />
              <ProgressValueText w={8} textAlign="right" color="neutral.400" />
            </Progress>
          );
        })}
      </VStack>

      <Box mt={10} bg="neutral.800" p={8}>
        <Box>Weakness</Box>

        <styled.ul mt={4} display="flex" gap={2}>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Water
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Grass
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Ice
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Bug
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Flying
          </styled.li>
        </styled.ul>
      </Box>

      <Box mt={10} bg="neutral.800" p={8}>
        <Box>Resistance</Box>

        <styled.ul mt={4} display="flex" gap={2}>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Poision
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Rock
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Steel
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Fire
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Electric
          </styled.li>
        </styled.ul>
      </Box>
    </Fragment>
  );
}

function formatStat(stat: string) {
  switch (stat) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'ATK';
    case 'defense':
      return 'DEF';
    case 'special-attack':
      return 'SATK';
    case 'special-defense':
      return 'SDEF';
    case 'speed':
      return 'SPD';
    default:
      return stat;
  }
}
