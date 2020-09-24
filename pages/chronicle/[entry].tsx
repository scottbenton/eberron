import { useRouter } from "next/router";
import { chronicleEntries } from "@/content/chronicle";

const ChronicleEntry: React.FC = (props) => {
  const router = useRouter();
  const { entry } = router.query;

  const currentEntry = chronicleEntries.find((e) => e.meta.url === entry);
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
    </div>
  );
};

export default ChronicleEntry;
