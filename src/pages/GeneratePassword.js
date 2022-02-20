import { useEffect, useState, useRef } from "react";

const GeneratePassword = () => {
  const [pwd, setPwd] = useState();

  const check_SL = useRef(this);
  const check_CL = useRef(this);
  const check_D = useRef(this);
  const check_SC = useRef(this);
  const length_pwd = useRef(this);

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
        c += `${getRandom(check_SL.current.checked ? LettersL : false )}${getRandom(check_CL.current.checked ? LettersU : false)}${getRandom(
            check_D.current.checked ? Digits : false
        )}${getRandom(check_SC.current.checked ? specialCharacters : false)}`;
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

        <div>
          <label htmlFor="s-l">Includes small letters </label>
          <input ref={check_SL} type="checkbox" id="s-l" />
        </div>
        <div>
          <label htmlFor="c-l">Includes capital letters </label>
          <input ref={check_CL} type="checkbox" id="c-l" />
        </div>
        <div>
          <label htmlFor="s-c">Includes special characters </label>
          <input ref={check_SC} type="checkbox" id="s-c" />
        </div>
        <div>
          <label htmlFor="d">Includes digits </label>
          <input ref={check_D} type="checkbox" id="d" />
        </div>
        <div>
          <label ref={length_pwd} htmlFor="l-p">length password </label>
          <select id="l-p">
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
          </select>
        </div>

        <button onClick={handleGenePwd} type="button">
          Generate
        </button>
      </div>
      <div className="output">{pwd}</div>
    </section>
  );
};

export default GeneratePassword;
