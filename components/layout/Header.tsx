import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { HomeIcon, NewspaperIcon, ArchiveIcon } from "@/components/icons";
import { BaseIconProps } from "../icons/BaseIcon";
import { Tooltip } from "@/components/Tooltip";

interface IPageConfig {
  path: string;
  label: string;
  Icon: React.FC<BaseIconProps>;
}

const pageConfig: IPageConfig[] = [
  {
    path: "/",
    label: "Home",
    Icon: HomeIcon,
  },
  {
    path: "/chronicle",
    label: "Korranberg Chronicle",
    Icon: NewspaperIcon,
  },
  {
    path: "/sessions",
    label: "Session Notes",
    Icon: ArchiveIcon,
  },
];

export const Header: React.FC = (props) => {
  const router = useRouter();

  return (
    <nav className={"flex items-center justify-between px-4 md:px-8 "}>
      <img
        src={"/Eberron.png"}
        alt={"Eberron Campaign"}
        className={"w-12 h-12 my-1"}
      />
      <div className={"h-full flex"}>
        {pageConfig.map((page, index) => {
          const { Icon, path, label } = page;
          return (
            <Tooltip text={label} key={index}>
              <Link href={path}>
                <a
                  className={clsx(
                    "h-full flex items-center px-4 py-5 fill-current focus:outline-none  box-border rounded-b-md relative",
                    path === router.pathname
                      ? "text-white bg-blue-600 hover:bg-blue-700"
                      : " text-gray-700 hover:bg-blue-300"
                  )}
                >
                  <Icon className={"w-6"} />
                </a>
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </nav>
  );
};
