import { useEffect, useState, useRef } from "react";

const GeneratePassword = () => {
  const [pwd, setPwd] = useState();

  const LettersL = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const LettersU = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const Digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const specialCharacters = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "=",
    ":",
    "<",
    ">",
    "/",
    "|",
    "\\",
    "?",
  ];

  const handleGenePwd = () => {
    function getRandom(array) {
      const r = Math.floor(Math.random() * array.length);
      if (array != false) {
        return array[r];
      } else {
        return "";
      }
    }

    function setLength(len) {
      let c = "";
      let arr = [];
      let length = Math.round(len / 4);
      for (let i = 1; i <= length; i++) {
        c += `${getRandom(false)}${getRandom(false)}${getRandom(
          false
        )}${getRandom(specialCharacters)}`;
      }
      arr.push(c);
      return shuffle(arr);
    }

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    const pwd = setLength(50);
    const sh = shuffle(pwd[0].split("")).join("");
    console.log(sh);
    setPwd((p) => {
      return (p = sh);
    });
  };

  return (
    <section className="gene-pwd">
      <div className="input">
        <button onClick={handleGenePwd} type="button">
          Generate
        </button>
      </div>
      <div className="output">{pwd}</div>
    </section>
  );
};

export default GeneratePassword;
