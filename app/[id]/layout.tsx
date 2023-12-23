import {Icon} from '@/components/icon';
import {Link} from '@/components/link';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {
  BarChart2Icon,
  LightbulbIcon,
  Rotate3DIcon,
  ShieldIcon,
} from 'lucide-react';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {PropsWithChildren, Suspense} from 'react';
import {Navbar, NavbarLoader} from './navbar';
import {PokemonAvatar, PokemonAvatarLoader} from './pokemon-avatar';
import {PokemonDetails, PokemonDetailsLoader} from './pokemon-details';
import {RecentlyViewed} from './recently-viewed';
import {getPokemon} from './utils';

export async function generateMetadata({
  params,
}: {
  params: {id: string};
}): Promise<Metadata> {
  const pokemon = await getPokemon(parseInt(params.id));

  if (!pokemon) return {};

  const sprite = JSON.parse(pokemon.sprites.at(0)?.sprites ?? '{}');
  const image =
    sprite.other?.dream_world?.front_default ??
    sprite.other?.dream_world?.front_default ??
    '';

  const title = capitalize(pokemon.name, {delimiter: '-'});
  const description = pokemon.specy?.flavorTexts
    .map((obj) => obj.flavorText)
    .join();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
  };
}

export default async function Layout({
  params,
  children,
}: PropsWithChildren<{params: {id: string}}>) {
  const id = parseInt(params.id);

  if (isNaN(id)) return notFound();

  return (
    <>
      <Suspense fallback={<NavbarLoader />}>
        <Navbar id={id} />
      </Suspense>

      <Flex
        mt={{
          lg: 16,
        }}
        gap={{
          base: 5,
          lg: 16,
        }}
        direction={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box
          w={{
            lg: '20rem',
          }}
          flexShrink={0}
        >
          <Suspense fallback={<PokemonAvatarLoader />}>
            <PokemonAvatar id={id} />
          </Suspense>

          <Box
            mt={8}
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <Suspense fallback={null}>
              <RecentlyViewed id={id} />
            </Suspense>
          </Box>
        </Box>

        <Box flexGrow={1}>
          <Suspense fallback={<PokemonDetailsLoader />}>
            <PokemonDetails id={id} />
          </Suspense>

          <styled.nav
            mt={{
              base: 8,
              lg: 12,
            }}
          >
            <styled.ul
              display="grid"
              gridTemplateColumns={{
                lg: 'repeat(4,1fr)',
              }}
              gap={{
                base: 3,
                lg: 5,
              }}
            >
              {links.map(({path, label, icon}) => (
                <styled.li key={path} w="full">
                  <Link
                    href={`/${params.id}${path}`}
                    css={{
                      w: 'full',
                      px: 4,
                      py: 3,
                      bg: 'neutral.800',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2.5,
                      transition: 'transform, background',
                      transitionDuration: 'slow',
                      _active: {
                        transform: 'scale(0.95)',
                      },
                      _selected: {
                        bg: 'orange.500',
                        color: 'orange.100',
                      },
                      _focusVisible: {
                        outline: '2px solid token(colors.neutral.500)',
                        outlineOffset: '3px',
                      },
                    }}
                  >
                    <Icon w={5} h={5} pointerEvents="none" asChild>
                      {icon}
                    </Icon>

                    {label}
                  </Link>
                </styled.li>
              ))}
            </styled.ul>
          </styled.nav>

          <Box
            mt={{
              base: 8,
              lg: 12,
            }}
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

const links = [
  {
    icon: <LightbulbIcon />,
    label: 'About',
    path: '/',
  },
  {
    icon: <BarChart2Icon />,
    label: 'Statistics',
    path: '/statistics',
  },
  {
    icon: <Rotate3DIcon />,
    label: 'Evolutions',
    path: '/evolutions',
  },
  {
    icon: <ShieldIcon />,
    label: 'Moves',
    path: '/moves',
  },
];
