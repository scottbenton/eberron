import * as Post1 from "./2020-09-24.mdx";
import * as Post2 from "./2020-09-30.mdx";
import * as Post3 from "./2020-10-06.mdx";
import * as Post4 from "./2020-10-12.mdx";
import * as Post5 from "./2021-01-04.mdx";
import * as Post6 from "./2021-02-03.mdx";

export interface IChronicleEntry {
  meta: {
    title: string;
    subtitle?: string;
    author: string;
    datePosted: string;
    url: string;
  };
  content: React.ReactNode;
}

const entries = [Post1, Post2, Post3, Post4, Post5, Post6];

export const chronicleEntries: IChronicleEntry[] = entries.map((Entry) => ({
  meta: Entry.meta,
  content: <Entry.default />,
}));

export const chronicleEntriesReverse = [...chronicleEntries].reverse();
