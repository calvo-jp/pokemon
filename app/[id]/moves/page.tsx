import {Box, styled} from '@/styled-system/jsx';
import {Fragment} from 'react';

export default function Moves({params}: {params: {id: string}}) {
  return (
    <Fragment>
      <Box bg="neutral.800" p={8}>
        <Box>Quick Moves</Box>

        <styled.ul mt={4} display="flex" gap={2}>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Sand Veil
          </styled.li>
          <styled.li
            bg="neutral.700"
            fontSize="sm"
            rounded="full"
            px={3}
            py={1}
          >
            Sand Rush
          </styled.li>
        </styled.ul>
      </Box>

      <Box bg="neutral.800" p={8} mt={10}>
        <Box>Main Moves</Box>

        <styled.table
          css={{
            w: 'full',
            mt: 4,
            '& th': {
              textAlign: 'left',
              fontSize: 'sm',
              color: 'neutral.400',
              py: 1,
            },
            '& td': {
              py: 1,
              fontSize: 'sm',
              fontFamily: 'mono',
              fontVariantNumeric: 'tabular-nums',

              _first: {
                fontFamily: 'sans',
              },
            },
          }}
        >
          <styled.thead>
            <styled.tr>
              <styled.th>Move</styled.th>
              <styled.th>Damage</styled.th>
              <styled.th>DPS</styled.th>
              <styled.th>EPS</styled.th>
            </styled.tr>
          </styled.thead>
          <styled.tbody>
            <styled.tr>
              <styled.td>
                <styled.div
                  bg="neutral.700"
                  fontSize="sm"
                  rounded="full"
                  display="inline-block"
                  px={2.5}
                  py={0.5}
                >
                  Scratch
                </styled.div>
              </styled.td>
              <styled.td>40</styled.td>
              <styled.td>35</styled.td>
              <styled.td>35</styled.td>
            </styled.tr>
            <styled.tr>
              <styled.td>
                <styled.div
                  bg="neutral.700"
                  fontSize="sm"
                  rounded="full"
                  display="inline-block"
                  px={2.5}
                  py={0.5}
                >
                  Cut
                </styled.div>
              </styled.td>
              <styled.td>50</styled.td>
              <styled.td>55</styled.td>
              <styled.td>45</styled.td>
            </styled.tr>
          </styled.tbody>
        </styled.table>
      </Box>
    </Fragment>
  );
}
