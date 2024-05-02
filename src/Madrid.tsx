import { useMadridTeamMembers } from "./TeamProvider";

export const Madrid = () => {
  const [state, dispatch] = useMadridTeamMembers();

  return (
    <>
      <h1>Real Madrid</h1>
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
