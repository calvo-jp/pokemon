import {Image} from '@/components/image';
import {Box} from '@/styled-system/jsx';
import {notFound} from 'next/navigation';
import {getPokemon} from './utils';

export async function PokemonAvatar({id}: {id: number}) {
  const pokemon = await getPokemon(id);

  if (!pokemon) return notFound();

  const sprite = JSON.parse(pokemon.sprites.at(0)?.sprites ?? '{}');
  const image =
    sprite.other?.dream_world?.front_default ??
    sprite.other?.dream_world?.front_default ??
    '';

  return (
    <Box
      bg="neutral.800"
      h="24rem"
      w="full"
      p={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
      aspectRatio={1}
    >
      <Image
        src={image}
        alt=""
        width={600}
        height={600}
        h="auto"
        maxH="full"
        maxW="full"
        fallbackSrc="/pokemon-ball.png"
      />
    </Box>
  );
}
