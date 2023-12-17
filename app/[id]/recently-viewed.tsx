import {RecentlyViewedSlideshow} from './recently-viewed-slideshow';
import {getPokemon} from './utils';

export async function RecentlyViewed({id}: {id: number}) {
  const pokemon = await getPokemon(id);

  if (!pokemon) return null;

  return <RecentlyViewedSlideshow __RSC_DATA={pokemon} />;
}
