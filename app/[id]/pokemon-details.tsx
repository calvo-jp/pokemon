import {styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {getPokemon} from './utils';

export async function PokemonDetails({id}: {id: number}) {
  const pokemon = await getPokemon(id);

  if (!pokemon) return null;

  return (
    <>
      <styled.h1
        fontSize={{
          base: '3xl',
          lg: '4xl',
        }}
        fontWeight="bold"
        lineHeight="none"
      >
        {capitalize(pokemon.name, {delimiter: '-'})}
      </styled.h1>

      <styled.ol display="flex" mt={4} gap={3}>
        {pokemon.types
          .filter((obj) => Boolean(obj.type))
          .map((obj) => (
            <styled.li
              key={obj.id}
              bg="neutral.800"
              px={4}
              py={1}
              rounded="full"
            >
              {obj.type?.name}
            </styled.li>
          ))}
      </styled.ol>
    </>
  );
}
