import {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressValueText,
} from '@/components/progress';
import {Box, VStack, styled} from '@/styled-system/jsx';
import {Fragment} from 'react';

export default function Statistics({params}: {params: {id: string}}) {
  return (
    <Fragment>
      <VStack alignItems="stretch" gap={3} bg="neutral.800" p={8}>
        <Progress value={75}>
          <ProgressLabel w={12}>HP</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" color="neutral.400" />
        </Progress>
        <Progress value={30}>
          <ProgressLabel w={12}>ATK</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" color="neutral.400" />
        </Progress>
        <Progress value={44}>
          <ProgressLabel w={12}>DEF</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" color="neutral.400" />
        </Progress>
        <Progress value={100}>
          <ProgressLabel w={12}>SATK</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" color="neutral.400" />
        </Progress>
        <Progress value={5}>
          <ProgressLabel w={12}>SDEF</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" color="neutral.400" />
        </Progress>
        <Progress value={55}>
          <ProgressLabel w={12}>SPD</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" color="neutral.400" />
        </Progress>
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
