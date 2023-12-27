import {RecentlyViewedCarousel} from './recently-viewed-carousel';
import {getPokemon} from './utils';

export async function RecentlyViewed({id}: {id: number}) {
  const pokemon = await getPokemon(id);

  if (!pokemon) return null;

  return <RecentlyViewedCarousel data={pokemon} />;
}
