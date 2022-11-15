import { useState } from "react";
import { useQuery } from "react-query";
import type { CharacterModel } from "./Character";
import Character from "./Character";

const Characters = () => {
  const [page, setPage] = useState(1);

  // const fetchCharacters = ;

  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    async ({ queryKey }) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
      );
      return response.json();
    }, {
      keepPreviousData: true,
    }
  );

  if (status === "loading") {
    return <div>Loading ...</div>;
  }
  if (status === "error") {
    return <div>Error : (</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character: CharacterModel, index: number) => (
        <Character key={index} character={character}></Character>
      ))}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={!data.info.next || isPreviousData} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
