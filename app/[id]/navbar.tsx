import {
  BreadcrumbItem,
  BreadcrumbItems,
  BreadcrumbLink,
  Breadcrumbs,
} from '@/components/breadcrumbs';
import {Link} from '@/components/link';
import {capitalize} from '@/utils/capitalize';
import {CurrentPageLabel} from './current-page-label';
import {getPokemon} from './utils';

export async function Navbar({id}: {id: number}) {
  const pokemon = await getPokemon(id);

  if (!pokemon) return null;

  return (
    <Breadcrumbs
      display={{
        base: 'none',
        lg: 'flex',
      }}
    >
      <BreadcrumbItems>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Pokemons</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${pokemon.id}`}>
              {capitalize(pokemon.name, {delimiter: '-'})}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink currentPage>
            <CurrentPageLabel />
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbItems>
    </Breadcrumbs>
  );
}
