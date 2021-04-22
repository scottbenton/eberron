import { useState } from "react";
import { TrialProgressBar } from "../components/TrialProgressBar";

const TrialTracker: React.FC = () => {
  const [darcyTracker, setDarcyTracker] = useState<number>(2);
  const [cannithTracker, setCannithTracker] = useState<number>(8);

  return (
    <div className={"p-4 md:p-8"}>
      <h1 className={"font-body font-semibold text-2xl text-gray-900"}>
        Trial Tracker
      </h1>
      <p className={"text-gray-700"}>
        Each progress bar corresponds to the current mood of the room for the
        given subject. A lower reputation corresponds to a higher likelihood of
        being convicted / having action taken against.
      </p>
      <TrialProgressBar
        value={darcyTracker}
        title={"Darcy's Reputation"}
        handleDecrement={() =>
          setDarcyTracker((currentValue) => currentValue - 1)
        }
        handleIncrement={() =>
          setDarcyTracker((currentValue) => currentValue + 1)
        }
        max={10}
      />

      <TrialProgressBar
        value={cannithTracker}
        title={"Cannith's Reputation"}
        handleDecrement={() =>
          setCannithTracker((currentValue) => currentValue - 1)
        }
        handleIncrement={() =>
          setCannithTracker((currentValue) => currentValue + 1)
        }
        max={10}
      />
    </div>
  );
};

export default TrialTracker;
