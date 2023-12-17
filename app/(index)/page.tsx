import {Box} from '@/styled-system/jsx';
import {clamp} from '@/utils/clamp';
import {Fragment, Suspense} from 'react';
import {parse} from 'valibot';
import {Filter} from './filter';
import {PageNav} from './page-nav';
import {Pokemons, PokemonsLoader} from './pokemons';
import {
  GetPokemonsArgsSchema,
  GetPokemonsArgsSchemaOutput,
  getPokemons,
} from './utils';

interface PokemonsProps {
  searchParams: {[key: string]: unknown};
}

export default async function PokemonsPage(props: PokemonsProps) {
  const filter = parse(GetPokemonsArgsSchema, {
    ...props.searchParams,
    types: props.searchParams.type,
  });

  return (
    <Fragment>
      <Filter />
      <Box
        mt={{
          base: 4,
          lg: 12,
        }}
        color="neutral.300"
        fontSize="sm"
        fontStyle="italic"
      >
        <Suspense fallback="Showing 0-0 of 0">
          <Summary filter={filter} />
        </Suspense>
      </Box>
      <Box mt={4}>
        <Suspense fallback={<PokemonsLoader size={filter.size} />}>
          <Pokemons filter={filter} />
        </Suspense>
      </Box>
      <PageNav filter={filter} />
    </Fragment>
  );
}

async function Summary({filter}: {filter: GetPokemonsArgsSchemaOutput}) {
  const data = await getPokemons(filter);

  const count = data.details.aggregate?.count ?? 0;
  const start = 1 + (filter.page - 1) * filter.size;
  const until = clamp(filter.page * filter.size, filter.size, count);

  return `Showing ${start}-${until} of ${count}`;
}
