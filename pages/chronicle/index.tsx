import Link from "next/link";
import { chronicleEntriesReverse } from "@/content/chronicle";

const Chronicle: React.FC = () => {
  return (
    <div className={"flex flex-col py-4 mx-auto max-w-2xl w-full"}>
      <h1 className={"text-center text-4xl  font-newspaper px-4"}>
        Korranberg Chronicle
      </h1>
      <h2
        className={
          "font-newspaper mt-6  mb-2 uppercase font-semibold tracking-wider px-10"
        }
      >
        Articles
      </h2>
      {chronicleEntriesReverse.map((entry, index) => (
        <Link href={"/chronicle/" + entry.meta.url} key={index}>
          <a
            className={
              "w-full py-6 flex flex-col hover:bg-smoke-lightest px-10 border-t"
            }
          >
            <span className={"font-newspaper text-xl font-semibold"}>
              {entry.meta.title}
            </span>
            {entry.meta.subtitle && (
              <span className={"font-newspaper text-gray-800"}>
                {entry.meta.subtitle}
              </span>
            )}
            <span className={"mt-4 text-gray-800 text-sm"}>
              {entry.meta.author + " ● " + entry.meta.datePosted}
            </span>
          </a>
        </Link>
      ))}
      <hr />
    </div>
  );
};

export default Chronicle;
