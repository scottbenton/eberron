import { useRouter } from "next/router";
import { sessionEntries } from "@/content/sessions";
import { dateToLongString } from "@/helpers/time-helpers";
import Link from "next/link";

const SessionEntry: React.FC = (props) => {
  const router = useRouter();
  const { session } = router.query;

  const intSession = parseInt(
    (Array.isArray(session) ? session[0] : session) || ""
  );

  const currentEntry = sessionEntries[intSession - 1];

  if (!currentEntry) {
    return null;
  }

  return (
    <div className={"flex flex-col px-4 w-full h-full flex-grow"}>
      <div
        className={
          "max-w-xl block md:prose prose-sm mx-auto my-8 w-full flex-grow"
        }
      >
        <h1>{`Session ${intSession}: ${currentEntry.meta.sessionTitle}`}</h1>

        <span className={"text-gray-700 block text-xl -mt-6"}>
          {dateToLongString(currentEntry.meta.datePlayed)}
        </span>
        <div className={"border-b border mt-4 md:mt-6 "} />
        {currentEntry?.content}
      </div>
      <div className={"w-full max-w-xl mx-auto flex justify-between py-4"}>
        <div>
          {intSession - 1 > 0 && (
            <Link href={`/sessions/${intSession - 1}`}>
              <a className={"underline text-blue-600 hover:text-blue-800"}>
                Previous Session
              </a>
            </Link>
          )}
        </div>
        <div>
          {intSession + 1 <= sessionEntries.length && (
            <Link href={`/sessions/${intSession + 1}`}>
              <a className={"underline text-blue-600 hover:text-blue-800"}>
                Next Session
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionEntry;
