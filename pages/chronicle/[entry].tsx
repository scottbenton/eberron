import { useRouter } from "next/router";
import { chronicleEntries } from "@/content/chronicle";
import Link from "next/link";

const ChronicleEntry: React.FC = (props) => {
  const router = useRouter();
  const { entry } = router.query;

  const entryIndex = chronicleEntries.findIndex((e) => e.meta.url === entry);
  const currentEntry = chronicleEntries[entryIndex];
  if (!currentEntry) {
    return null;
  }

  return (
    <div className={"flex flex-col px-4 w-full"}>
      <div className={"max-w-xl block prose mx-auto mb-8"}>
        <h1 className={"font-newspaper"}>{currentEntry.meta.title}</h1>
        <span className={"text-2xl text-gray-900 font-newspaper block -mt-6"}>
          {currentEntry.meta.subtitle}
        </span>
        <span className={"text-gray-700 mt-4 block"}>
          {currentEntry.meta.author + " ● " + currentEntry.meta.datePosted}
        </span>
        <hr />
        {currentEntry?.content}
      </div>
      <div className={"w-full max-w-xl mx-auto flex justify-between py-4"}>
        <div>
          {entryIndex - 1 >= 0 && (
            <Link
              href={`/chronicle/${chronicleEntries[entryIndex - 1].meta.url}`}
            >
              <a className={"underline text-blue-600 hover:text-blue-800"}>
                Previous Article
              </a>
            </Link>
          )}
        </div>
        <div>
          {entryIndex + 1 < chronicleEntries.length && (
            <Link
              href={`/chronicle/${chronicleEntries[entryIndex + 1].meta.url}`}
            >
              <a className={"underline text-blue-600 hover:text-blue-800"}>
                Next Article
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChronicleEntry;
