import { PropsWithChildren } from "react";

export const Content = (props: PropsWithChildren) => {
  const { children } = props;
  return <div className={"flex-grow flex flex-col"}>{children}</div>;
};
