import { useMadridTeamStore } from "./useTeamStore";

export const Madrid = () => {
  const { madrid, removePlayer } = useMadridTeamStore();

  return (
    <>
      <h3>Real Madrid</h3>
      <ul>
        {madrid.map((player) => (
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
