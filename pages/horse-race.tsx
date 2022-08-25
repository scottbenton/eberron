import React, { useDebugValue, useState } from "react";
import { NextPage } from "next";
import { Tooltip } from "@/components/Tooltip";
import clsx from "clsx";

const horses = [
  {
    name: "The Lord of Babes",
    shortName: "LB",
    backgroundColor: "#D8B4FE",
    textColor: "#7E22CE",
  },
  {
    name: "Raptor",
    shortName: "R",
    backgroundColor: "#86EFAC",
    textColor: "#15803D",
  },
  {
    name: "Footloose",
    shortName: "F",
    backgroundColor: "#A5F3FC",
    textColor: "#0E7490",
  },
  {
    name: "Thronegold",
    shortName: "T",
    backgroundColor: "#FCD34D",
    textColor: "#B45309",
  },
  {
    name: "The Silver Mane",
    shortName: "SM",
    backgroundColor: "#D4D4D8",
    textColor: "#3F3F46",
  },
  {
    name: "Taer it up, Valaestas",
    shortName: "TV",
    backgroundColor: "#FCA5A5",
    textColor: "#B91C1C",
  },
];

const HorseRacePage: NextPage = () => {
  const [horseProgress, setHorseProgress] = useState<number[]>([
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [tmpProgress, setTmpProgress] = useState<string[]>([]);

  const updateHorseProgress = () => {
    setHorseProgress((progress) => {
      let newProgress = progress.map((value, index) => {
        const parsedInt = parseInt(tmpProgress[index]);
        return (value || 0) + (isNaN(parsedInt) ? 0 : parsedInt);
      });
      console.debug(newProgress);
      return newProgress;
    });
    setTmpProgress([]);
  };

  const updateTmpProgress = (index: number, value: string) => {
    console.debug(index, value);
    let numString = value.match(/\d+/g)?.join("") || "";
    console.debug(numString);
    setTmpProgress((progress) => {
      let newProgress = [...progress];
      newProgress[index] = numString;
      return newProgress;
    });
  };

  console.debug(tmpProgress);

  const isWinner = (index: number) => {
    if (horseProgress[index] >= 100) {
      console.debug("Over 100, Starting is Winner");
      let isWinner = true;
      horseProgress.forEach((value, idx) => {
        if (value > horseProgress[index]) {
          isWinner = false;
        }
      });
      return isWinner;
    }
    return false;
  };

  return (
    <div className={"px-4 py-8"}>
      <h1 className={"text-2xl font-semibold mb-4"}>
        Taer Valaestas Horse Race
      </h1>
      <div className={"grid grid-cols-6 gap-2 w-full"}>
        {horses.map((horse, index) => (
          <label key={horse.name} className={"text-gray-600"}>
            {horse.name}
            <input
              className={
                "w-full px-4 w-full text-sm text-gray-700 py-2 border focus:border-blue-500 focus:outline-none rounded-lg hide-number-spinner"
              }
              value={tmpProgress[index] || ""}
              onChange={(evt) => {
                evt.preventDefault();
                updateTmpProgress(index, evt.currentTarget.value);
              }}
            />
          </label>
        ))}
        <div className={"col-span-5"} />
        <button
          className={
            "rounded-lg w-full bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-2 ring-primary-200 focus:outline-none px-4 py-2 border border-blue-400 uppercase text-sm font-semibold tracking-wide"
          }
          onClick={() => updateHorseProgress()}
        >
          Update Totals
        </button>
      </div>
      <div className={"mt-8 border border-gray-300 bg-white"}>
        {horses.map((horse, index) => (
          <div className={"flex w-full h-16"} key={horse.name}>
            <div className={"bg-gray-100 w-8"} />
            <div className={"flex-grow flex items-center relative"}>
              <div
                className={`h-full absolute top-0 left-1/4 w-px bg-gray-300`}
              />
              <div
                className={`h-full absolute top-0 left-1/2 w-px bg-gray-300`}
              />
              <div
                className={`h-full absolute top-0 left-3/4 w-px bg-gray-300`}
              />
              <div
                className={`w-100 flex-grow transition-transform duration-1000 ease-in-out`}
                style={{
                  transform: `translate(${Math.min(
                    horseProgress[index],
                    100
                  )}%)`,
                }}
              >
                <Tooltip text={horseProgress[index] + "/100"}>
                  <div
                    className={clsx(
                      "h-12 w-12 flex flex-col items-center justify-center rounded-full transform -translate-x-1/2 font-semibold uppercase tracking-widest relative"
                    )}
                    style={{
                      backgroundColor: horse.backgroundColor,
                      color: horse.textColor,
                    }}
                  >
                    <div
                      className={clsx(
                        "absolute h-12 w-12 rounded-full top-0",
                        isWinner(index) && "animate-ping"
                      )}
                      style={{
                        backgroundColor: horse.backgroundColor,
                      }}
                    />
                    <span className={"relative"}>{horse.shortName}</span>
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className={"checkerboard w-16 border-l border-gray-300"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorseRacePage;
