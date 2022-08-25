import React, { PropsWithChildren, useEffect, useState } from "react";
import { Badge } from "./Badge";
export interface NewBadgeProps extends PropsWithChildren {
  localStorageKey: string;
}

export const NewBadge: React.FC<NewBadgeProps> = (props) => {
  const { localStorageKey, children } = props;

  const [shouldDisplayBadge, setShouldDisplayBadge] = useState<boolean>(false);

  useEffect(() => {
    setShouldDisplayBadge(
      window.localStorage.getItem(localStorageKey) !== "true"
    );
    window.localStorage.setItem(localStorageKey, "true");
  }, [localStorageKey]);

  if (shouldDisplayBadge) {
    return <Badge label={"New"}>{children}</Badge>;
  }
  return <>{children}</>;
};
