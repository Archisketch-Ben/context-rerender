import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

type Team = "barca" | "madrid";

type Action =
  | { type: "add"; team: Team; player: string }
  | { type: "remove"; team: Team; player: string };

type State = {
  [key in Team]: string[];
};

const FirstTeamMembersContext = createContext<
  [State, Dispatch<Action>] | undefined
>(undefined);

const initialState: State = {
  barca: ["messi", "suarez", "neymar"],
  madrid: ["ronaldo", "bale", "benzema"],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        [action.team]: [...state[action.team], action.player],
      };
    case "remove":
      return {
        ...state,
        [action.team]: state[action.team].filter(
          (player) => player !== action.player
        ),
      };
    default:
      return state;
  }
};

const FirstTeamMembersProvider = ({ children }: { children: ReactNode }) => {
  const value = useReducer(reducer, initialState);

  return (
    <FirstTeamMembersContext.Provider value={value}>
      {children}
    </FirstTeamMembersContext.Provider>
  );
};

const useFirstTeamMembers = () => {
  const context = useContext(FirstTeamMembersContext);

  if (context === undefined) {
    throw new Error(
      "useFirstTeamMembers must be used within a FirstTeamMembersProvider"
    );
  }

  return context;
};

export { FirstTeamMembersProvider, useFirstTeamMembers };
