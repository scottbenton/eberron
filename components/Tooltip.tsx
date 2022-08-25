import { PropsWithChildren } from "react";

export interface TooltipProps extends PropsWithChildren {
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { text, children } = props;

  return (
    <div className={"tooltip"}>
      {children}
      <span className={"tooltipText"}>{text}</span>
    </div>
  );
};
