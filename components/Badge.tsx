import clsx from "clsx";
import { PropsWithChildren } from "react";

export interface BadgeProps extends PropsWithChildren {
  className?: string;
  label: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { className, children, label } = props;

  return (
    <div className={"flex items-baseline"}>
      {children}
      <span
        className={clsx(
          className,
          "rounded-full bg-blue-700 text-white text-xs px-1 -m uppercase tracking-wide ml-2"
        )}
      >
        {label}
      </span>
    </div>
  );
};
