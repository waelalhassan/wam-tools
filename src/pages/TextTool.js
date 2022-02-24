import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const TextTool = () => {
  const [numChar, setNumChar] = useState(0);
  const [numWords, setNumWords] = useState(0);
  const upper = useRef(this);

  const handleUppercase = () => {
    upper.current.value = upper.current.value.toUpperCase();
  };

  const handleLowercase = () => {
    upper.current.value = upper.current.value.toLowerCase();
  };

  const handleFirstLetterUpper = () => {
    upper.current.value = firstLetterUpper(upper.current.value);

    function firstLetterUpper(string) {
      return string.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    }
  };

  const handleLength = () => {
    function NumberWords(string) {
      return string.split(" ").filter((a) => {
        if (a !== "") return a;
      }).length;
    }

    setNumChar((NC) => (NC = upper.current.value.length));
    setNumWords((NW) => (NW = NumberWords(upper.current.value)));
  };

  const handlerCopy = () => {

  }

  return (
    <>
      <Nav />
      <main className="wrapper-text-tool">
        <div className="container">
          <div className="text-tool">
            <div className="task-bar d-flex d-justify-between">
              <div className="text-info">
                <span>
                  Number of characters: <b>{numChar}</b>{" "}
                </span>
                <span>
                  Number of words: <b>{numWords}</b>{" "}
                </span>
              </div>
              <div className="parent-txet-copy">
                <button onClick={handlerCopy} type="button">
                  <ImCopy />
                  <ImCheckmark />
                </button>
              </div>
            </div>
            <div className="input">
              <textarea ref={upper} onChange={handleLength}></textarea>
            </div>
            <div className="controls-btns d-flex">
              <button onClick={handleUppercase} type="button">
                Uppercase
              </button>
              <button onClick={handleLowercase} type="button">
                Lowercase
              </button>
              <button onClick={handleFirstLetterUpper} type="button">
                First letter uppercase
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TextTool;
