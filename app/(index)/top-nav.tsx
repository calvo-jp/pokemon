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
import {
  IconCheck,
  IconChevronDown,
  IconSearch,
  IconX,
} from '@/components/icons';
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
import {Box, Flex, styled} from '@/styled-system/jsx';
import {Portal} from '@ark-ui/react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {Fragment, useState} from 'react';

export function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [values, setValues] = useState({
    search: searchParams.get('search') ?? '',
    types: searchParams.getAll('types') ?? [],
  });

  return (
    <Flex gap={4} alignItems="center">
      <Input
        placeholder="Search"
        value={values.search}
        onChange={(evt) => {
          setValues((current) => ({
            ...current,
            search: evt.target.value,
          }));
        }}
      />

      <Select
        w="18rem"
        items={POKEMON_TYPES}
        multiple
        positioning={{
          sameWidth: true,
        }}
        value={values.types}
        onValueChange={(details) => {
          setValues((current) => ({
            ...current,
            types: details.value,
          }));
        }}
        flexShrink={0}
      >
        {(ctx) => (
          <Fragment>
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
                    <IconX w={5} h={5} />
                  </Box>
                </SelectClearTrigger>
                <SelectIndicator>
                  <IconChevronDown w={6} h={6} />
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
                          <IconCheck w={4} h={4} />
                        </SelectItemIndicator>
                      </SelectItem>
                    ))}
                  </SelectItemGroup>
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </Fragment>
        )}
      </Select>

      <Button
        flexShrink={0}
        onClick={() => {
          const s = new URLSearchParams(searchParams);

          s.set('search', values.search);
          s.delete('types');

          values.types.forEach((type) => {
            s.append('types', type);
          });

          router.push(`${pathname}?${s.toString()}`);
        }}
      >
        <IconSearch w={6} h={6} color="neutral.400" />
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
