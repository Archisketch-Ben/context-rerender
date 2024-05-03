import { useMadridTeamMembers } from "./TeamProvider";

export const Madrid = () => {
  const [state, dispatch] = useMadridTeamMembers();

  return (
    <>
      <h3>Real Madrid</h3>
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
