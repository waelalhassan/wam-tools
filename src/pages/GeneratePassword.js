import { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImSpinner11 } from "react-icons/im";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const GeneratePassword = () => {
  const [pwd, setPwd] = useState("The password will appear here...");
  const [copied, setCopied] = useState(false);

  const check_SL = useRef(this);
  const check_CL = useRef(this);
  const check_D = useRef(this);
  const check_SC = useRef(this);
  const length_pwd = useRef(this);
  const HandlerButton = useRef(this);

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

  function get_number_ch() {
    const list_ch = [
      check_SL.current.checked,
      check_CL.current.checked,
      check_D.current.checked,
      check_SC.current.checked,
    ];
    return list_ch.filter((c) => {
      return c == true;
    });
  }

  useEffect(() => {
    if (get_number_ch().length < 1) {
      HandlerButton.current.disabled = true;
    }
  }, []);

  function disable_btn(RefName) {
    if (RefName.current.checked) {
      HandlerButton.current.disabled = false;
    } else {
      HandlerButton.current.disabled = true;
    }
  }

  function Enable_btn() {
    if (get_number_ch().length > 0) {
      HandlerButton.current.disabled = false;
    } else {
      HandlerButton.current.disabled = true;
    }
  }

  const handleCheck_CL = () => {
    disable_btn(check_CL);
    Enable_btn();
  };

  const handleCheck_SC = () => {
    disable_btn(check_SC);
    Enable_btn();
  };

  const handleCheck_SL = () => {
    disable_btn(check_SL);
    Enable_btn();
  };

  const handleCheck_D = () => {
    disable_btn(check_D);
    Enable_btn();
  };

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

      let length = Math.round(len / get_number_ch().length);

      for (let i = 1; i <= length; i++) {
        c += `${getRandom(
          check_SL.current.checked ? LettersL : false
        )}${getRandom(check_CL.current.checked ? LettersU : false)}${getRandom(
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

    const pwd = setLength(length_pwd.current.value);
    const sh = shuffle(pwd[0].split("")).join("");
    setPwd((p) => {
      return (p = sh);
    });
  };

  const handlerCopy = () => {
    window.navigator.clipboard.writeText(pwd);
    setCopied((c) => {
      return (c = true);
    });
    setTimeout(() => {
      setCopied((c) => {
        return (c = false);
      });
    }, 1000);
  };

  const handlerClearResult = () => {
    setPwd((p) => (p = "The password will appear here..."));
  };

  return (
    <>
      <Nav />
      <main className="wrapper-gene-pwd">
        <div className="container">
          <div className="gene-pwd">
            <header>
              <h1>Password Generator</h1>
              <p>Generate a strong password that is impossible to guess</p>
            </header>
            <div className="input">
              <div className="item">
                <label htmlFor="s-l">Includes small letters </label>
                <input
                  ref={check_SL}
                  onChange={handleCheck_SL}
                  type="checkbox"
                  id="s-l"
                />
              </div>
              <div className="item">
                <label htmlFor="c-l">Includes capital letters </label>
                <input
                  ref={check_CL}
                  onChange={handleCheck_CL}
                  type="checkbox"
                  id="c-l"
                />
              </div>
              <div className="item">
                <label htmlFor="s-c">Includes special characters </label>
                <input
                  ref={check_SC}
                  onChange={handleCheck_SC}
                  type="checkbox"
                  id="s-c"
                />
              </div>
              <div className="item">
                <label htmlFor="d">Includes digits </label>
                <input
                  ref={check_D}
                  onChange={handleCheck_D}
                  type="checkbox"
                  id="d"
                />
              </div>
              <div className="item">
                <label htmlFor="l-p">length password </label>
                <select ref={length_pwd} id="l-p" defaultValue={10}>
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
              <button ref={HandlerButton} onClick={handleGenePwd} type="button">
                Generate
              </button>
            </div>

            <div className="output">
              <div className="task-bar">
                <button onClick={handlerClearResult} type="button">
                  <ImSpinner11 />
                </button>
                <button onClick={handlerCopy} type="button">
                  {copied ? (
                    <span>
                      <ImCheckmark />
                    </span>
                  ) : (
                    <ImCopy />
                  )}
                </button>
              </div>
              <div className="result">{pwd}</div>
            </div>
            <div className="about">
            <p>The most common way hackers can hack accounts is by guessing your
            password. Using simple and common passwords creates an opportunity
            for hackers to gain access to your accounts. Since no one wants
            their personal information stolen, use strong passwords to protect
            your information. Thanks to this tool, people can create a strong
            password that is impossible to guess.</p>
            <h2>What is a password generator?</h2>
            <p>Just as its name sounds, with it you can create custom, strong and
            random passwords for each of your online accounts</p>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GeneratePassword;
