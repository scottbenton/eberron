import {
  AudioListItem,
  HomeSection,
  MostRecentArticle,
  ResourceLink,
} from "../components/home";
import { dateToLongString } from "../helpers/time-helpers";

import { sessionEntries } from "../content/sessions";
import { chronicleEntriesReverse } from "../content/chronicle";

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
          <ResourceLink href={"/dm-prep"}>How I Plan Sessions</ResourceLink>
          <ResourceLink href={"https://eberronmap.johnarcadian.com/"}>
            World Map
          </ResourceLink>
        </ul>
      </HomeSection>
      <HomeSection title={"Intro Music"}>
        <ul className={"text-gray-700"}>
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
