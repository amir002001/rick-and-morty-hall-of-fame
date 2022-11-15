import React, { useEffect, useState } from "react";

interface Character {
  name: string
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();

    return () => {};
  });

  return <>{characters.map((character) => (
    <div>{character.name}</div>
  ))}</>;
};

export default Characters;
