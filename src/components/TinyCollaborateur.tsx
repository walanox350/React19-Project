import { FC } from 'react';

interface TinyCollaborateurProps {
  name: string;
  id: number;
}

export const TinyCollaborateur: FC<TinyCollaborateurProps> = ({ name, id }) => (
  <div className="border p-4 rounded-lg shadow-md text-center bg-white">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt={name}
      className="w-20 h-20 mx-auto"
    />
    <p className="mt-2 font-bold capitalize">{name}</p>
  </div>
);
