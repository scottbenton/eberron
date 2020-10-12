import * as Session1 from "./session-1.mdx";
import * as Session2 from "./session-2.mdx";
import * as Session3 from "./session-3.mdx";
import * as Session4 from "./session-4.mdx";
import * as Session5 from "./session-5.mdx";
import * as Session6 from "./session-6.mdx";
import * as Session7 from "./session-7.mdx";
import * as Session8 from "./session-8.mdx";
import * as Session9 from "./session-9.mdx";
import * as Session10 from "./session-10.mdx";
import * as Session11 from "./session-11.mdx";
import * as Session12 from "./session-12.mdx";

export interface ISessionEntry {
  meta: {
    datePlayed: Date;
    sessionTitle: string;
  };
  content: React.ReactNode;
}

const entries = [
  Session1,
  Session2,
  Session3,
  Session4,
  Session5,
  Session6,
  Session7,
  Session8,
  Session9,
  Session10,
  Session11,
  Session12,
];

export const sessionEntries: ISessionEntry[] = entries
  .map((Entry) => ({
    meta: Entry.meta,
    content: <Entry.default />,
  }))
  .sort((e1, e2) => e1.meta.datePlayed - e2.meta.datePlayed);
