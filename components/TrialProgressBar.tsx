import {
  PlusIcon,
  MinusIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

export interface TrialProgressBarProps {
  value: number;
  title: string;
  max: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const TrialProgressBar: React.FC<TrialProgressBarProps> = (props) => {
  const { value, title, max, handleIncrement, handleDecrement } = props;

  let barWidthPercentage: string = "0%";
  if (value < max) {
    barWidthPercentage = (value / max) * 100 + "%";
  } else {
    barWidthPercentage = "100%";
  }

  return (
    <div className={"bg-gray-200 rounded-lg shadow-inner p-4 mt-6"}>
      <div className={"flex justify-between items-center flex-wrap"}>
        <h2 className={"text-xl text-gray-700"}>
          {title}: {value} points
        </h2>
        <div>
          <button
            className={
              "ml-2 p-2 rounded-full focus:outline-none focus:shadow-outline bg-gray-400 hover:bg-blue-200 text-blue-700 flex-shrink-0 transition-all duration-300 ease-in-out"
            }
            onClick={(evt) => {
              handleDecrement();
              evt.currentTarget.blur();
            }}
          >
            <MinusIcon className={"w-6 h-6"} />
          </button>
          <button
            className={
              "ml-2 p-2 rounded-full focus:outline-none focus:shadow-outline bg-gray-400 hover:bg-blue-200 text-blue-700 flex-shrink-0 transition-all duration-300 ease-in-out"
            }
            onClick={(evt) => {
              handleIncrement();
              evt.currentTarget.blur();
            }}
          >
            <PlusIcon className={"w-6 h-6"} />
          </button>
        </div>
      </div>
      <div
        className={
          "flex-grow bg-gray-400 rounded-full overflow-hidden h-6 mt-8"
        }
      >
        <span
          style={{ width: barWidthPercentage }}
          className={
            "bg-blue-700 h-full block transition-all duration-700 ease-in-out rounded-full"
          }
        ></span>
      </div>
      <div className={"flex justify-between text-gray-600 mt-2"}>
        <EmojiSadIcon className={"w-6 h-6"} />
        <QuestionMarkCircleIcon className={"w-6 h-6"} />
        <EmojiHappyIcon className={"w-6 h-6"} />
      </div>
    </div>
  );
};
