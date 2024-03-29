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
import * as Session28 from "./session-28.mdx";
import * as Session29 from "./session-29.mdx";
import * as Session30 from "./session-30.mdx";
import * as Session31 from "./session-31.mdx";
import * as Session32 from "./session-32.mdx";
import * as Session33 from "./session-33.mdx";
import * as Session34 from "./session-34.mdx";
import * as Session35 from "./session-35.mdx";
import * as Session36 from "./session-36.mdx";
import * as Session37 from "./session-37.mdx";
import * as Session38 from "./session-38.mdx";
import * as Session39 from "./session-39.mdx";
import * as Session40 from "./session-40.mdx";
import * as Session41 from "./session-41.mdx";
import * as Session42 from "./session-42.mdx";
import * as Session43 from "./session-43.mdx";

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
  Session28,
  Session29,
  Session30,
  Session31,
  Session32,
  Session33,
  Session34,
  Session35,
  Session36,
  Session37,
  Session38,
  Session39,
  Session40,
  Session41,
  Session42,
  Session43,
];

export const sessionEntries: ISessionEntry[] = entries
  .map((Entry) => ({
    meta: ((Entry as unknown) as ISessionEntry).meta,
    content: <Entry.default />,
  }))
  .sort(
    (e1, e2) =>
      ((e1 as unknown) as ISessionEntry).meta.datePlayed.getUTCDate() -
      ((e2 as unknown) as ISessionEntry).meta.datePlayed.getUTCDate()
  );
