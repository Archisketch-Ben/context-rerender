import { useBarcaTeamMembers } from "./TeamProvider";

export const Barca = () => {
  const [state, dispatch] = useBarcaTeamMembers();

  return (
    <>
      <h3>Barcelona</h3>
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
