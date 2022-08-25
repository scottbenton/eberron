import clsx from "clsx";
import React, { useState } from "react";
import ArrowIcon from "@heroicons/react/24/outline/ChevronRightIcon";

export interface CollapsibleSectionProps {
  initOpen?: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = (
  props
) => {
  const { initOpen, title, content } = props;

  const [open, setOpen] = useState<boolean>(initOpen ?? false);

  return (
    <div className={"border rounded-lg overflow-hidden mt-4"}>
      <button
        className={
          "cursor-pointer hover:bg-gray-200 p-4 w-full focus:outline-none focus:border-b border-gray-500 flex items-center text-left"
        }
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <div className={"flex-grow font-lg font-semibold"}>{title}</div>
        <ArrowIcon
          className={clsx(
            "w-5 h-5 transition transform duration-300 ease-in-out text-gray-600",
            open ? "rotate-90" : "rotate-0"
          )}
        />
      </button>
      {open && (
        <div className={"p-4 border-t"}>
          <section className={"prose md:prose-md"}>
            {typeof content === "string" ? <p>{content}</p> : <>{content}</>}
          </section>
        </div>
      )}
    </div>
  );
};
