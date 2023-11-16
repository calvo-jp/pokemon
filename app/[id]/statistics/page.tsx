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
      <VStack alignItems="stretch" gap={3}>
        <Progress value={75}>
          <ProgressLabel w={12}>HP</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" />
        </Progress>
        <Progress value={30}>
          <ProgressLabel w={12}>ATK</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" />
        </Progress>
        <Progress value={44}>
          <ProgressLabel w={12}>DEF</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" />
        </Progress>
        <Progress value={100}>
          <ProgressLabel w={12}>SATK</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" />
        </Progress>
        <Progress value={5}>
          <ProgressLabel w={12}>SDEF</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" />
        </Progress>
        <Progress value={55}>
          <ProgressLabel w={12}>SPD</ProgressLabel>
          <ProgressValue />
          <ProgressValueText w={8} textAlign="right" />
        </Progress>
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
