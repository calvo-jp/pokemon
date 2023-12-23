'use client';

import dark from '@/assets/images/dark.svg';
import electric from '@/assets/images/electric.svg';
import fairy from '@/assets/images/fairy.svg';
import fighter from '@/assets/images/fighter.svg';
import fire from '@/assets/images/fire.svg';
import grass from '@/assets/images/grass.svg';
import ground from '@/assets/images/ground.svg';
import metal from '@/assets/images/metal.svg';
import poison from '@/assets/images/poison.svg';
import rock from '@/assets/images/rock.svg';
import steel from '@/assets/images/steel.svg';
import water from '@/assets/images/water.svg';
import {Button} from '@/components/button';
import {Icon} from '@/components/icon';
import {Image} from '@/components/image';
import {Input} from '@/components/input';
import {
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemIndicator,
  SelectItemText,
  SelectPositioner,
  SelectTrigger,
  SelectValueText,
} from '@/components/select';
import {css, cx} from '@/styled-system/css';
import {Box, Flex, VisuallyHidden, styled} from '@/styled-system/jsx';
import {Portal} from '@ark-ui/react';
import {CheckIcon, ChevronDownIcon, SearchIcon, XIcon} from 'lucide-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {useReducer} from 'react';
import {parse} from 'valibot';
import {FilterSchema, FilterSchemaOuput} from './utils';

export function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useReducer(
    (prev: FilterSchemaOuput, next: Partial<FilterSchemaOuput>) => ({
      ...prev,
      ...next,
    }),
    parse(FilterSchema, {
      search: searchParams.get('search'),
      types: searchParams.getAll('type'),
    }),
  );

  return (
    <Flex
      columnGap={{
        base: 0,
        lg: 4,
      }}
      rowGap={{
        base: 3,
        lg: 4,
      }}
      alignItems="center"
      flexWrap={{
        base: 'wrap',
        lg: 'nowrap',
      }}
    >
      <Input
        flexGrow={1}
        placeholder="Enter keyword"
        value={filter.search}
        onChange={(evt) => {
          setFilter({search: evt.target.value});
        }}
      />

      <Select
        w={{
          base: '75%',
          lg: '18rem',
        }}
        flexShrink={0}
        items={POKEMON_TYPES}
        multiple
        positioning={{
          sameWidth: true,
        }}
        value={filter.types}
        onValueChange={(details) => {
          setFilter({types: details.value});
        }}
      >
        {(ctx) => (
          <>
            <SelectControl>
              <SelectTrigger>
                <SelectValueText flexGrow={1}>
                  <styled.span
                    className={cx(
                      !ctx.hasSelectedItems && css({color: 'neutral.600'}),
                    )}
                  >
                    {ctx.hasSelectedItems
                      ? formatTypes(ctx.selectedItems as PokemonType[])
                      : 'Choose Types'}
                  </styled.span>
                </SelectValueText>
                <SelectClearTrigger asChild>
                  <Box>
                    <Icon w={5} h={5} asChild>
                      <XIcon />
                    </Icon>
                  </Box>
                </SelectClearTrigger>
                <SelectIndicator>
                  <Icon w={6} h={6} asChild>
                    <ChevronDownIcon />
                  </Icon>
                </SelectIndicator>
              </SelectTrigger>
            </SelectControl>

            <Portal>
              <SelectPositioner>
                <SelectContent>
                  <SelectItemGroup id="1">
                    {POKEMON_TYPES.map((obj) => (
                      <SelectItem key={obj.value} item={obj}>
                        <SelectItemText>
                          <Image src={obj.image} alt="" w={5} h={5} />
                          <styled.span>{obj.label}</styled.span>
                        </SelectItemText>
                        <SelectItemIndicator>
                          <Icon w={4} h={4} asChild>
                            <CheckIcon />
                          </Icon>
                        </SelectItemIndicator>
                      </SelectItem>
                    ))}
                  </SelectItemGroup>
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </>
        )}
      </Select>

      <Button
        w={{
          base: 'calc(25% - 0.75rem)',
          lg: 'auto',
        }}
        ml={{
          base: 3,
          lg: 0,
        }}
        flexShrink={0}
        onClick={() => {
          const s = new URLSearchParams(searchParams);

          s.delete('search');
          s.delete('type');
          s.delete('page');

          if (filter.search) {
            s.set('search', filter.search);
          }

          if (filter.types.length > 0) {
            filter.types.forEach((type) => {
              s.append('type', type);
            });
          }

          router.push(`${pathname}?${s.toString()}`);
        }}
      >
        <Icon w={6} h={6} color="neutral.400" asChild>
          <SearchIcon />
        </Icon>
        <VisuallyHidden>Search</VisuallyHidden>
      </Button>
    </Flex>
  );
}

interface PokemonType {
  label: string;
  value: string;
  image: string;
}

const POKEMON_TYPES: PokemonType[] = [
  {
    label: 'Dark',
    value: 'dark',
    image: dark,
  },
  {
    label: 'Electric',
    value: 'electric',
    image: electric,
  },
  {
    label: 'Fairy',
    value: 'fairy',
    image: fairy,
  },
  {
    label: 'Fighter',
    value: 'fighter',
    image: fighter,
  },
  {
    label: 'Fire',
    value: 'fire',
    image: fire,
  },
  {
    label: 'Grass',
    value: 'grass',
    image: grass,
  },
  {
    label: 'Ground',
    value: 'ground',
    image: ground,
  },
  {
    label: 'Metal',
    value: 'metal',
    image: metal,
  },
  {
    label: 'Poison',
    value: 'poison',
    image: poison,
  },
  {
    label: 'Rock',
    value: 'rock',
    image: rock,
  },
  {
    label: 'Steel',
    value: 'steel',
    image: steel,
  },
  {
    label: 'Water',
    value: 'water',
    image: water,
  },
];

function formatTypes(list: PokemonType[]) {
  let len = list.length;

  if (len < 0) return '';
  if (len > 1) return `${list[0].label} and ${--len} more`;
  return list[0].label;
}
