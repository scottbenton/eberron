import clsx from "clsx";
import React, { ReactElement, SVGProps } from "react";

export interface CircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  children: ReactElement;
}

export const CircleIcon: React.FC<CircleIconProps> = (props) => {
  const { className, children, ...iconProps } = props;

  return (
    <div className={clsx(className, "p-2 rounded-full")}>
      {React.cloneElement(children, iconProps)}
    </div>
  );
};
