import { sessionEntries } from "@/content/sessions";
import Link from "next/link";
import { dateToLongString } from "@/helpers/time-helpers";
const Sessions: React.FC = () => {
  return (
    <div className={"flex flex-col py-4 mx-auto max-w-xl w-full"}>
      <h1 className={"text-center text-4xl font-semibold font-title px-4"}>
        Session Notes
      </h1>
      <h2 className={"font-title mt-6  mb-2 uppercase tracking-wider px-4"}>
        Sessions
      </h2>
      {sessionEntries.map((entry, index) => (
        <>
          <hr />
          <Link href={"/sessions/" + (index + 1)} key={index}>
            <a
              className={
                "w-full py-2 flex flex-col hover:bg-smoke-lightest px-4"
              }
            >
              <span className={"font-title text-xl font-semibold"}>
                {`Session ${index + 1}: ${entry.meta.sessionTitle}`}
              </span>
              <span className={"mt-2 text-gray-800 text-sm"}>
                {dateToLongString(entry.meta.datePlayed)}
              </span>
            </a>
          </Link>
        </>
      ))}
      <hr />
    </div>
  );
};

export default Sessions;
