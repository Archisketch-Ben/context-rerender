import { useFirstTeamMembers } from "./TeamProvider";

export const Barca = () => {
  const [state, dispatch] = useFirstTeamMembers();

  console.log("Barca rendered");

  return (
    <>
      <h1>Barcelona</h1>
      <ul>
        {state.barca.map((player) => (
          <li key={player}>
            {player}
            <button
              onClick={() =>
                dispatch({ type: "remove", team: "barca", player })
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
