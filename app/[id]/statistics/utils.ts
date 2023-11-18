import {arrayUnique} from '@/utils/array-unique';

export async function getResistanceAndWeakness(types: (string | number)[]) {
  const promises = types.map(async (type) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      return {
        resistance: [
          ...data.damage_relations.double_damage_to,
          ...data.damage_relations.half_damage_from,
          ...data.damage_relations.no_damage_from,
        ],
        weaknesses: [
          ...data.damage_relations.double_damage_from,
          ...data.damage_relations.half_damage_to,
          ...data.damage_relations.no_damage_to,
        ],
      };
    } catch (error) {
      return {
        resistance: [],
        weaknesses: [],
      };
    }
  });

  const responses = await Promise.allSettled(promises);

  const resistanceAndWeaknesses = responses.reduce<{
    resistance: {name: string; url: string}[];
    weaknesses: {name: string; url: string}[];
  }>(
    (obj, res) => {
      if (res.status === 'rejected') return obj;

      return {
        resistance: [...obj.resistance, ...res.value.resistance],
        weaknesses: [...obj.weaknesses, ...res.value.weaknesses],
      };
    },
    {
      resistance: [],
      weaknesses: [],
    },
  );

  return {
    resistance: arrayUnique(resistanceAndWeaknesses.resistance, (v) => v.name),
    weaknesses: arrayUnique(resistanceAndWeaknesses.weaknesses, (v) => v.name),
  };
}
