import {PageNavPagination} from './page-nav-pagination';
import {GetPokemonsArgsSchemaOutput, getPokemons} from './utils';

export async function PageNav({filter}: {filter: GetPokemonsArgsSchemaOutput}) {
  const data = await getPokemons(filter);

  return (
    <PageNavPagination
      page={filter.page}
      size={filter.size}
      count={data.details.aggregate?.count ?? 0}
    />
  );
}
