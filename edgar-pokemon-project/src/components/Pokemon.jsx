import { useRequest } from "../hooks/useRequest";

export function Pokemon({pokemon}){
  const { name } = pokemon;

  const { data: spriteData, error: spriteError } = useRequest(`/pokemon/${name}`);
  const { data: typeData, error: typeError } = useRequest(`/pokemon/${name}`);

  if (!spriteData || !typeData) {
    return <h1>Loading...</h1>;
  }

  if (spriteError || typeError) {
    return <div>Error: There was an error with getting data</div>;
  }

  return(
    <>
      {spriteData && typeData && (
        <div className="card">
          <span className="card-id">#{spriteData.id}</span>
          <img
            src={spriteData.sprites.front_default}
            alt={name}
            className="card-sprite"
          />

          <h2 className="card-name">{name}</h2>
          <span className="card-details">
            <h3>
              <i>Type</i>
            </h3>
            <ul className="type-list">
              {typeData.types.map((poke) => (
                <li key={poke.type.name}>{poke.type.name.toUpperCase()}</li>
              ))}
            </ul>
          </span>
        </div>
      )} 
      {/* : {<ErrorHandling />} */}
    </>
  ) 
}