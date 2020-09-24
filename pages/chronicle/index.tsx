import { chronicleEntries } from "@/content/chronicle";
import Link from "next/link";

const Chronicle: React.FC = () => {
  return (
    <div className={"flex flex-col p-4 mx-auto max-w-xl w-full"}>
      <h1 className={"text-center text-4xl font-semibold font-newspaper"}>
        Korranberg Chronicle
      </h1>
      <h2
        className={
          "font-newspaper mt-6  mb-2 uppercase font-semibold tracking-wider"
        }
      >
        Articles
      </h2>
      {chronicleEntries.reverse().map((entry, index) => (
        <>
          <hr />
          <Link href={"/chronicle/" + entry.meta.url} key={index}>
            <a className={"w-full py-2 flex flex-col hover:bg-smoke-lightest"}>
              <span className={"font-newspaper text-xl font-semibold"}>
                {entry.meta.title}
              </span>
              {entry.meta.subtitle && (
                <span className={"font-newspaper text-gray-800 mt"}>
                  {entry.meta.subtitle}
                </span>
              )}
              <span className={"mt-2 text-gray-800 text-sm"}>
                {entry.meta.author + " ● " + entry.meta.datePosted}
              </span>
            </a>
          </Link>
        </>
      ))}
      <hr />
    </div>
  );
};

export default Chronicle;
