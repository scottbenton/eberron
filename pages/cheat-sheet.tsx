import React from "react";
import { TextPage } from "@/components/TextPage";
import cheatSheetInfo from "@/content/cheat-sheet.json";
import { CollapsibleSection } from "../components/CollapsibleSection";

const CheatSheet: React.FC = (props) => {
  return (
    <div className={"p-2 md:p-4 max-w-screen-md mx-auto"}>
      <h1 className={"text-4xl font-semibold"}>Cheat Sheet</h1>
      <p className={"text-gray-700 mt-2 mb-8"}>{cheatSheetInfo.currentGoal}</p>
      <CollapsibleSection
        title={"Open Threads"}
        content={
          <ul>
            {cheatSheetInfo.plotHooks.map((hook, index) => (
              <li key={index}>{hook}</li>
            ))}
          </ul>
        }
      />
      <CollapsibleSection
        title={"Silver Flame Investigation Clues"}
        content={
          <ul>
            {cheatSheetInfo.thraneClues.map((clue, index) => (
              <li key={index}>{clue}</li>
            ))}
          </ul>
        }
      />
      <CollapsibleSection
        title={"Gods & Eldritch Beings"}
        content={cheatSheetInfo.gods.map((god, index) => (
          <div key={index} className={index !== 0 ? "border-t mt-8 pt-2" : ""}>
            <div className={"text-xl font-bold text-gray-900"}>{god.name}</div>
            <div className={"mt-2"}>{god.knownInfo}</div>
            <div className={"font-bold mt-3 -mb-4"}>Who Knows More?</div>
            <ul>
              {god.sources.map((source, srcIndex) => (
                <li key={srcIndex}>{source}</li>
              ))}
            </ul>
          </div>
        ))}
      />
      <CollapsibleSection
        title={"Important NPCs"}
        content={
          <ul>
            {cheatSheetInfo.npcs.map((npc, index) => (
              <li key={index}>
                <b>{npc.name}</b>: {npc.description}
              </li>
            ))}
          </ul>
        }
      />
      <CollapsibleSection
        title={"Important Places"}
        content={
          <ul>
            {cheatSheetInfo.places.map((place, index) => (
              <li key={index}>
                <b>{place.name}</b>: {place.description}
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
};

export default CheatSheet;
