import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

type Action =
  | { type: "add"; player: string }
  | { type: "remove"; player: string };

type Members = string[];

const BarcaTeamMembersContext = createContext<
  [Members, Dispatch<Action>] | undefined
>(undefined);

const MadridTeamMembersContext = createContext<
  [Members, Dispatch<Action>] | undefined
>(undefined);

const initialBarcaState: { barca: Members } = {
  barca: ["messi", "suarez", "neymar"],
};

const initialMadridState: { madrid: Members } = {
  madrid: ["ronaldo", "bale", "modric"],
};

const barcaReducer = (state: typeof initialBarcaState, action: Action) => {
  switch (action.type) {
    case "add":
      return { barca: [...state.barca, action.player] };
    case "remove":
      return {
        barca: state.barca.filter((player) => player !== action.player),
      };
    default:
      return state;
  }
};

const madridReducer = (state: typeof initialMadridState, action: Action) => {
  switch (action.type) {
    case "add":
      return { madrid: [...state.madrid, action.player] };
    case "remove":
      return {
        madrid: state.madrid.filter((player) => player !== action.player),
      };
    default:
      return state;
  }
};

export const useBarcaTeamMembers = () => {
  const context = useContext(BarcaTeamMembersContext);
  if (!context) {
    throw new Error(
      "useBarcaTeamMembers must be used within a FirstTeamMembersProvider"
    );
  }
  return context;
};

export const useMadridTeamMembers = () => {
  const context = useContext(MadridTeamMembersContext);
  if (!context) {
    throw new Error(
      "useMadridTeamMembers must be used within a FirstTeamMembersProvider"
    );
  }
  return context;
};

export const BarcaTeamMembersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(barcaReducer, initialBarcaState);

  return (
    <BarcaTeamMembersContext.Provider value={[state.barca, dispatch]}>
      {children}
    </BarcaTeamMembersContext.Provider>
  );
};

export const MadridTeamMembersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(madridReducer, initialMadridState);

  return (
    <MadridTeamMembersContext.Provider value={[state.madrid, dispatch]}>
      {children}
    </MadridTeamMembersContext.Provider>
  );
};

export const FirstTeamMembersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <BarcaTeamMembersProvider>
      <MadridTeamMembersProvider>{children}</MadridTeamMembersProvider>
    </BarcaTeamMembersProvider>
  );
};
