import clsx from "clsx";
import Link from "next/link";

export interface ResourceLinkProps {
  href: string;
  className?: string;
}

export const ResourceLink: React.FC<ResourceLinkProps> = (props) => {
  const { href, className, children } = props;

  return (
    <li className={clsx("link", className)}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
