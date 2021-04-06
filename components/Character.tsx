import React from "react";
import { Avatar } from "./Avatar";

export interface CharacterProps {
  name: string;
  subtitle?: string;
  imageUrl: string;
  description?: React.ReactNode;
}

export const Character: React.FC<CharacterProps> = (props) => {
  const { name, subtitle, imageUrl, description } = props;
  return (
    <div className={"bg-gray-200 rounded-lg shadow-inner p-4 mt-4 w-full"}>
      <div className={"flex items-center"}>
        <Avatar url={imageUrl} alt={name} />
        <div className={"flex flex-col ml-4"}>
          <span className={"font-semibold md:text-lg"}>{name}</span>
          <span className={"text-gray-600"}>{subtitle}</span>
        </div>
      </div>
      {description && (
        <p style={{ marginBottom: 0 }} className={"text-sm"}>
          {description}
        </p>
      )}
    </div>
  );
};
