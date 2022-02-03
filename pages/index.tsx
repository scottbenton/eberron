import {
  AudioListItem,
  HomeSection,
  MostRecentArticle,
  ResourceLink,
} from "../components/home";
import { dateToLongString } from "../helpers/time-helpers";

import { sessionEntries } from "../content/sessions";
import { chronicleEntriesReverse } from "../content/chronicle";
import cheatSheet from "../content/cheat-sheet.json";
import Link from "next/link";

const mostRecentSessionIndex = sessionEntries.length;
const mostRecentSession = sessionEntries[mostRecentSessionIndex - 1];

const mostRecentChronicle = chronicleEntriesReverse[0];

const Home: React.FC = () => {
  return (
    <div
      className={
        "h-full flex-grow flex flex-col p-4 max-w-screen-md w-full mx-auto "
      }
    >
      <h1 className={"text-4xl font-semibold tracking-tight text-gray-900"}>
        Eberron Extended
      </h1>
      <p className={"text-gray-700 text-lg"}>
        Resources, notes, and more for my weekly Dungeons and Dragons Campaign
      </p>
      <HomeSection title={"Cheat Sheet"}>
        <p className={"text-gray-700"}>{cheatSheet.currentGoal}</p>
        <div className={"inline-flex mt-2"}>
          <Link href={"/cheat-sheet"}>
            <a
              className={
                "h-full flex items-center px-4 py-2 fill-current focus:outline-none box-border rounded-md relative transition-colors duration-200 ease-in-out gradient-bg hover:from-blue-700 hover:to-indigo-700 text-white uppercase font-semibold text-sm"
              }
            >
              View More
            </a>
          </Link>
        </div>
      </HomeSection>
      <HomeSection title={"Session Notes"}>
        <p className={"text-gray-700"}>What happened last week?</p>
        <MostRecentArticle
          baseUrl={"/sessions"}
          articleUrl={`/sessions/${mostRecentSessionIndex}`}
          primaryText={`Session ${mostRecentSessionIndex}: ${mostRecentSession.meta.sessionTitle}`}
          secondaryText={dateToLongString(mostRecentSession.meta.datePlayed)}
          itemName={"Session"}
        />
      </HomeSection>
      <HomeSection title={"Korranberg Chronicle"}>
        <p className={"text-gray-700"}>
          Top headlines from across the world of Eberron
        </p>
        <MostRecentArticle
          baseUrl={"/chronicle"}
          articleUrl={`/chronicle/${mostRecentChronicle.meta.url}`}
          primaryText={
            <>
              {mostRecentChronicle.meta.title + ": "}
              <span className={"font-normal"}>
                {mostRecentChronicle.meta.subtitle}
              </span>
            </>
          }
          secondaryText={`By ${mostRecentChronicle.meta.author}`}
          itemName={"Post"}
        />
      </HomeSection>
      <HomeSection title={"Resources"}>
        <ul>
          <ResourceLink
            href={"/trial-tracker"}
            localStorageKey={"trial-tracker"}
          >
            Trial Tracker
          </ResourceLink>
          <ResourceLink
            href={"/magic-item-creation"}
            localStorageKey={"magic-item-creation"}
          >
            Magic Item Creation Rules
          </ResourceLink>
          <ResourceLink
            href={
              "https://www.dndbeyond.com/posts/611-around-khorvaire-in-fifty-days-encounters-of-the"
            }
            localStorageKey={"around-khorvaire"}
          >
            Around Khorvaire in Fifty Days - Basis for this Campaign
          </ResourceLink>
          <ResourceLink href={"/dm-prep"} localStorageKey={"dm-prep"}>
            How I Plan Sessions
          </ResourceLink>
          <ResourceLink
            href={"https://eberronmap.johnarcadian.com/"}
            localStorageKey={"eberron-map"}
          >
            World Map
          </ResourceLink>
        </ul>
      </HomeSection>
      <HomeSection title={"Intro Music"}>
        <ul className={"text-gray-700"}>
          <AudioListItem source={"/TheAllSeer.mp3"} name={"The All Seer"} />
          <AudioListItem
            source={"/TheSovereignOfShadows.mp3"}
            name={"The Sovereign of Shadows"}
          />
          <AudioListItem
            source={"/TheCelesteNoir.mp3"}
            name={"The Celeste Noir"}
          />
          <AudioListItem source={"/TheMourning.mp3"} name={"The Mourning"} />
        </ul>
      </HomeSection>
    </div>
  );
};

export default Home;
