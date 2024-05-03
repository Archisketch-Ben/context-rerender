import { useBarcaTeamStore } from "./useTeamStore";

export const Barca = () => {
  const { barca, removePlayer } = useBarcaTeamStore();

  return (
    <>
      <h3>Barcelona</h3>
      <ul>
        {barca.map((player) => (
          <li key={player}>
            {player}
            <button onClick={() => removePlayer(player)}>Remove</button>
          </li>
        ))}
      </ul>
      {Array.from({ length: 10_000 }).map((_, index) => (
        <div
          style={{
            width: "1px",
            height: "1px",
            overflow: "hidden",
            position: "absolute",
          }}
          key={index}
        />
      ))}
    </>
  );
};
