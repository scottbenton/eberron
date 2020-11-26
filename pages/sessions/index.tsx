import { sessionEntries } from "@/content/sessions";
import Link from "next/link";
import { dateToLongString } from "@/helpers/time-helpers";
const Sessions: React.FC = () => {
  return (
    <div className={"flex flex-col py-4 mx-auto max-w-2xl w-full"}>
      <h1 className={"text-center text-4xl  font-title px-4 "}>
        Session Notes
      </h1>
      <h2 className={"font-title mt-6  mb-2 uppercase tracking-wider px-10"}>
        Sessions
      </h2>
      {sessionEntries.map((entry, index) => (
        <Link href={"/sessions/" + (index + 1)} key={index}>
          <a
            className={
              "w-full py-4 md:py-6 flex flex-col hover:bg-smoke-lightest px-6 md:px-10 border-t"
            }
          >
            <span className={"font-title text-xl font-semibold"}>
              {`Session ${index + 1}: ${entry.meta.sessionTitle}`}
            </span>
            <span className={" text-gray-800 text-sm"}>
              {dateToLongString(entry.meta.datePlayed)}
            </span>
          </a>
        </Link>
      ))}
      <hr />
    </div>
  );
};

export default Sessions;
