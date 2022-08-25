import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { CircleIcon } from "../CircleIcon";

export interface AudioListItemProps {
  source: string;
  name: string;
}

export const AudioListItem: React.FC<AudioListItemProps> = (props) => {
  const { source, name } = props;

  return (
    <li className={"mt-4 gradient-bg rounded-lg p-4 flex items-center"}>
      <CircleIcon className={"flex-shrink-0 text-blue-600 bg-white"}>
        <MusicalNoteIcon className={"w-6 h-6"} />
      </CircleIcon>
      <div className={"flex-grow ml-4"}>
        <h3 className={"text-lg font-bold tracking-wide"}>{name}</h3>
        <audio src={source} controls className={"rounded-lg mt-1 w-full"} />
      </div>
    </li>
  );
};
