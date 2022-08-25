import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import {
  HomeIcon,
  NewspaperIcon,
  ArchiveBoxIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@/components/Tooltip";

interface IPageConfig {
  path: string;
  label: string;
  icon: React.ReactElement;
}

const pageConfig: IPageConfig[] = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon className={"w-6 h-6"} />,
  },
  {
    path: "/cheat-sheet",
    label: "Cheat Sheet",
    icon: <ClipboardDocumentListIcon className={"w-6 h-6"} />,
  },
  {
    path: "/sessions",
    label: "Session Notes",
    icon: <ArchiveBoxIcon className={"w-6 h-6"} />,
  },
  {
    path: "/chronicle",
    label: "Korranberg Chronicle",
    icon: <NewspaperIcon className={"w-6 h-6"} />,
  },
];

export const Header: React.FC = (props) => {
  const router = useRouter();

  return (
    <nav className={"flex items-center justify-between px-4 md:px-8 "}>
      <img
        src={"/Eberron.png"}
        alt={"Eberron Campaign"}
        className={"my-1 h-12"}
      />
      <div className={"h-full flex"}>
        {pageConfig.map((page, index) => {
          const { icon, path, label } = page;
          return (
            <Tooltip text={label} key={index}>
              <Link href={path}>
                <a
                  className={clsx(
                    "h-full flex items-center px-3 py-5 fill-current focus:outline-none  box-border rounded-b-md relative transition-colors duration-200 ease-in-out",
                    path === router.pathname
                      ? "gradient-bg hover:from-blue-700 hover:to-indigo-700 text-white"
                      : "hover:bg-indigo-300 text-gray-700"
                  )}
                >
                  {icon}
                </a>
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </nav>
  );
};
