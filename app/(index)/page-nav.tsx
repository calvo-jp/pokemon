import {PageNavClient} from './page-nav-client';
import {GetPokemonsArgsSchemaOutput, getPokemons} from './utils';

export async function PageNav({filter}: {filter: GetPokemonsArgsSchemaOutput}) {
  const data = await getPokemons(filter);

  return (
    <PageNavClient
      page={filter.page}
      size={filter.size}
      count={data.details.aggregate?.count ?? 0}
    />
  );
}
