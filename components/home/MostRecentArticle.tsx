import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { CircleIcon } from "../CircleIcon";

export interface MostRecentArticleProps {
  baseUrl: string;
  articleUrl: string;
  primaryText: React.ReactNode;
  secondaryText: React.ReactNode;
  itemName: string;
}

export const MostRecentArticle: React.FC<MostRecentArticleProps> = (props) => {
  const { baseUrl, articleUrl, primaryText, secondaryText, itemName } = props;

  return (
    <>
      <div className={"mt-5 flex justify-between items-baseline"}>
        <span
          className={"text-gray-900 text-sm"}
        >{`Most Recent ${itemName}:`}</span>
        <Link href={baseUrl}>
          <span className={"rounded-lg inline-flex link text-sm"}>
            {`View All ${itemName}s`}
            {/* <DotsHorizontal className={text-gray-600 ml-2"} size={20} /> */}
          </span>
        </Link>
      </div>
      <Link href={articleUrl}>
        <div
          className={
            "home-card hover:bg-blue-200 cursor-pointer flex items-center transition-colors ease-in-out duration-300 mt-1"
          }
        >
          <div className={"flex-grow"}>
            <h3 className={"font-semibold leading-snug"}>{primaryText}</h3>
            <div className={"text-gray-700"}>{secondaryText}</div>
          </div>
          <CircleIcon className={"gradient-bg"}>
            <ArrowRightIcon className={"w-6 h-6"} />
          </CircleIcon>
        </div>
      </Link>
      {/* <DotsVertical className={"ml-2 my-2 text-gray-500"} size={20} /> */}
    </>
  );
};
