import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { NewBadge } from "../NewBadge";

export interface ResourceLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
  localStorageKey: string;
}

export const ResourceLink: React.FC<ResourceLinkProps> = (props) => {
  const { href, className, localStorageKey, children } = props;

  return (
    <li className={clsx("link", className)}>
      <NewBadge localStorageKey={localStorageKey}>
        <Link href={href}>{children}</Link>
      </NewBadge>
    </li>
  );
};
