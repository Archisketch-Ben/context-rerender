import { useFirstTeamMembers } from "./TeamProvider";

export const Madrid = () => {
  const [state, dispatch] = useFirstTeamMembers();

  console.log("Madrid rendered");

  return (
    <>
      <h1>Real Madrid</h1>
      <ul>
        {state.madrid.map((player) => (
          <li key={player}>
            {player}
            <button
              onClick={() =>
                dispatch({ type: "remove", team: "madrid", player })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
