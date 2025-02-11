interface Pokemon {
  name: string;
  url: string;
}

export const fetchCollaborateursList = async (
  limit: number = 151
): Promise<{ results: Pokemon[] }> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  if (!response.ok) throw new Error('Impossible de récupérer les Pokémon');
  return response.json();
};
