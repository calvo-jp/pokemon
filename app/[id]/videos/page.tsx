import {Image} from '@/components/image';
import {Box, Grid, GridItem} from '@/styled-system/jsx';

export default function Videos({params}: {params: {id: string}}) {
  return (
    <Grid columns={2} gap={6}>
      <GridItem bg="neutral.800">
        <Image
          src="https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={600}
          height={400}
          objectFit="cover"
          h="16rem"
          w="full"
        />

        <Box p={4} lineHeight="snug">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
          hic.
        </Box>
      </GridItem>
    </Grid>
  );
}
