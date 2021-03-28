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
import * as Session13 from "./session-13.mdx";
import * as Session14 from "./session-14.mdx";
import * as Session15 from "./session-15.mdx";
import * as Session16 from "./session-16.mdx";
import * as Session17 from "./session-17.mdx";
import * as Session18 from "./session-18.mdx";
import * as Session19 from "./session-19.mdx";
import * as Session20 from "./session-20.mdx";
import * as Session21 from "./session-21.mdx";
import * as Session22 from "./session-22.mdx";
import * as Session23 from "./session-23.mdx";
import * as Session24 from "./session-24.mdx";
import * as Session25 from "./session-25.mdx";
import * as Session26 from "./session-26.mdx";
import * as Session27 from "./session-27.mdx";

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
  Session13,
  Session14,
  Session15,
  Session16,
  Session17,
  Session18,
  Session19,
  Session20,
  Session21,
  Session22,
  Session23,
  Session24,
  Session25,
  Session26,
  Session27,
];

export const sessionEntries: ISessionEntry[] = entries
  .map((Entry) => ({
    meta: Entry.meta,
    content: <Entry.default />,
  }))
  .sort((e1, e2) => e1.meta.datePlayed - e2.meta.datePlayed);
