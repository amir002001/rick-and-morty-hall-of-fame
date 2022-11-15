export interface CharacterProps {
  character: CharacterModel;
}

export interface CharacterModel {
  name: string;
  image: string;
  status: string;
  location: {
    name: string;
  }
}

export default function Character({ character }: CharacterProps) {
  return (
    <div className="card">
      <img src={character.image} alt="character headshot" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">{character.status}</p>
        <p></p>
        <p>Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}
