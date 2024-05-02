import { useBarcaTeamMembers } from "./TeamProvider";

export const Barca = () => {
  const [state, dispatch] = useBarcaTeamMembers();

  return (
    <>
      <h1>Barcelona</h1>
      <ul>
        {state.map((player) => (
          <li key={player}>
            {player}
            <button onClick={() => dispatch({ type: "remove", player })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
