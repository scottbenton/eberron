import { useState, ChangeEvent } from "react";

interface cipher {
  a?: string;
  c?: string;
  b?: string;
  d?: string;
  e?: string;
  f?: string;
  g?: string;
  h?: string;
  i?: string;
  j?: string;
  k?: string;
  l?: string;
  m?: string;
  n?: string;
  o?: string;
  p?: string;
  q?: string;
  r?: string;
  s?: string;
  t?: string;
  u?: string;
  v?: string;
  w?: string;
  x?: string;
  y?: string;
  z?: string;
}

const alphabetCipher: cipher = {
  r: "a",
  j: "b",
  m: "c",
  e: "d",
  a: "e",
  l: "f",
  v: "g",
  y: "h",
  c: "i",
  q: "j",
  d: "k",
  f: "l",
  h: "m",
  s: "n",
  w: "o",
  i: "p",
  b: "q",
  n: "r",
  o: "s",
  k: "t",
  u: "u",
  t: "v",
  z: "w",
  g: "x",
  x: "y",
  p: "z",
};

const cipherString = Object.values(alphabetCipher).join("");

const angelicasLog =
  "\tI’ve been hired by House Cannith to aid in the recovery of a few artifacts. Avanth and Klara d’Cannith await the delivery of these items in The Labyrinth. \n\tThe first object, the Arcane Sundial, allows for matter to be transported between the material plane and Dal Quor, The Plane of Dreams. This object uses the harnessed energy of trapped quori spirits to make the connection. The quori, however, will not open this connection willingly. \n\tThat is where the second object, the Gauntlet of Transposition comes in. It is currently in the hands of Leir d’Kundarak. Its role is to act as a catalyst of sorts, and will allow the captain of an airship to transport the ship through Dal Quor to its target almost instantly.";

const AngelicaCypher: React.FC = (props) => {
  const [inputAlphabet, setInputAlphabet] = useState<cipher>({});
  const [correctSolution, setCorrectSolution] = useState<boolean>(false);

  const cipherizeLog = (currentCipher: cipher) => {
    const alphabetRE = /^[A-Z]+$/i;
    let output = [];
    for (let i = 0; i < angelicasLog.length; i++) {
      const currentChar = angelicasLog[i];

      if (
        alphabetRE.test(currentChar) &&
        (i === 0 || angelicasLog[i - 1] !== "\\")
      ) {
        output.push(currentCipher[currentChar.toLowerCase()] ?? "_");
      } else {
        output.push(currentChar);
      }
    }
    return output;
  };

  const onInputChange = (value, key) => {
    setInputAlphabet((prevAlphabet) => {
      let newAlphabet = { ...prevAlphabet };

      let newChar = value.replace(/[^a-z]/gi, "").slice(-1);
      newAlphabet[key] = newChar ? newChar.toLowerCase() : undefined;

      if (Object.values(newAlphabet).join("") === cipherString) {
        setCorrectSolution(true);
      } else {
        setCorrectSolution(false);
      }

      return newAlphabet;
    });
  };

  return (
    <div className={"p-4"}>
      <h1 className={"font-title text-center text-4xl text-blue-700"}>
        Angelica's Cypher
      </h1>
      {correctSolution && <span>SOLVED</span>}
      <div className={"flex flex-wrap justify-center mt-4"}>
        {Object.keys(alphabetCipher).map((char, index) => (
          <div key={index} className={"flex flex-col items-center"}>
            <span>{alphabetCipher[char]}</span>
            <input
              className={
                "bg-transparent border-b-2 px-2 py-1 border-gray-500 focus:border-blue-500 focus:outline-none w-8 text-center"
              }
              value={inputAlphabet[char] ?? ""}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                onInputChange(evt.target.value, char)
              }
            />
          </div>
        ))}
        <div className={"flex items-center ml-1"}>
          <button
            className={
              "px-2 py-1 border-blue-500 hover:bg-smoke-lightest border-2 rounded-md text-blue-600 uppercase font-semibold tracking-wide text-sm focus:outline-none focus:shadow-outline"
            }
            onClick={(evt) => {
              evt.currentTarget.blur();
              setInputAlphabet({});
              setCorrectSolution(false);
            }}
          >
            Reset
          </button>
        </div>

        <span className={"text-lg text-center w-full mt-8"}>
          Angelica's Abridged Notes
        </span>
        <div
          className={
            "max-w-xl py-2 w-full relative whitespace-pre-wrap font-mono"
          }
          style={{ lineHeight: "4rem" }}
        >
          <p className={"absolute t-0 l-0 r-0 mt-5 text-gray-900  "}>
            {cipherizeLog(inputAlphabet)}
          </p>
          <p className={"w-full text-gray-700"}>
            {cipherizeLog(alphabetCipher)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AngelicaCypher;
