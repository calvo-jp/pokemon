import {
  BreadcrumbItem,
  BreadcrumbItems,
  BreadcrumbLink,
  Breadcrumbs,
} from '@/components/breadcrumbs';
import {
  IconBarChart2,
  IconLightBulb,
  IconRotate3D,
  IconShield,
} from '@/components/icons';
import {Image} from '@/components/image';
import {Link} from '@/components/link';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Fragment, PropsWithChildren} from 'react';
import {CurrentPageLabel} from './current-page-label';
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
  const pokemon = await getPokemon(parseInt(params.id));

  if (!pokemon) return notFound();

  const sprite = JSON.parse(pokemon.sprites.at(0)?.sprites ?? '{}');
  const image =
    sprite.other?.dream_world?.front_default ??
    sprite.other?.dream_world?.front_default ??
    '';

  return (
    <Fragment>
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

          <Box
            mt={8}
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <RecentlyViewed __RSC_DATA={pokemon} />
          </Box>
        </Box>

        <Box flexGrow={1}>
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
              {links.map(({path, label, icon: SVGIcon}) => (
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
                    <SVGIcon w={5} h={5} pointerEvents="none" />
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
    </Fragment>
  );
}

const links = [
  {
    icon: IconLightBulb,
    label: 'About',
    path: '/',
  },
  {
    icon: IconBarChart2,
    label: 'Statistics',
    path: '/statistics',
  },
  {
    icon: IconRotate3D,
    label: 'Evolutions',
    path: '/evolutions',
  },
  {
    icon: IconShield,
    label: 'Moves',
    path: '/moves',
  },
];
