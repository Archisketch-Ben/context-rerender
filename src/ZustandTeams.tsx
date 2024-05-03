import { Barca } from "./ZustandBarca";
import { Madrid } from "./ZustandMadrid";

export const ZustandTeams = () => {
  return (
    <div>
      <h2>Teams</h2>
      <div>
        <Barca />
        <Madrid />
      </div>
    </div>
  );
};
