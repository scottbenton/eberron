import * as Post1 from "./9-24-2020.mdx";

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

const entries = [Post1];

export const chronicleEntries: IChronicleEntry[] = entries.map((Entry) => ({
  meta: Entry.meta,
  content: <Entry.default />,
}));
