import { useState } from 'react';
import { SearchBar } from '../components/Searchbar';
import { useFetch } from '../hooks/useFetch';
import { fetchCollaborateursList } from '../services/collaborateursService';
import { TinyCollaborateur } from '../components/TinyCollaborateur';

export const Home = () => {
  interface Pokemon {
    name: string;
    url: string;
  }

  const { data, loading, error } = useFetch<{ results: Pokemon[] }>(() =>
    fetchCollaborateursList()
  );
  const [search, setSearch] = useState<string>('');

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const pokemonWithId = data?.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
  }));

  const filteredCollaborateurs = pokemonWithId?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-lg font-small text-pretty text-gray-500 sm:text-xl/8">
              Tu veux en savoir plus sur un collaborateur? Tu recherches une
              personne pouvant t'aider mais tu ne sais pas à qui t'adresser ?
              Fais ta recherche ici-même
            </p>
          </div>
          <SearchBar search={search} setSearch={setSearch} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {filteredCollaborateurs?.map((pokemon) => {
              return (
                <TinyCollaborateur
                  key={pokemon.id}
                  name={pokemon.name}
                  id={pokemon.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
