import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { Helmet } from "react-helmet";

const TextTool = () => {
  const [numChar, setNumChar] = useState(0);
  const [numWords, setNumWords] = useState(0);
  const upper = useRef(this);
  const [copy, setCopy] = useState(false);

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
    window.navigator.clipboard.writeText(upper.current.value);
    setCopy((c) => (c = true));
    setTimeout(() => {
      setCopy((c) => (c = false));
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Text tool</title>
      </Helmet>
      <Nav />
      <main className="wrapper-text-tool">
        <div className="container">
          <div className="text-tool">
            <header>
              <h1>Text tool</h1>
              <p>
                Through this tool, you will be able to know the number of
                characters for a specific text, in addition to that, the number
                of words, make the text with uppercase or lowercase letters, or
                make the first letter capitalized in the text
              </p>
            </header>
            <div className="task-bar d-flex d-justify-between">
              <div className="text-info">
                <span>
                  Total Characters <b>{numChar} | </b>
                </span>
                <span>
                  Total Words <b>{numWords} </b>
                </span>
              </div>
              <div className="parent-txet-copy">
                <button onClick={handlerCopy} type="button">
                  {copy ? (
                    <span>
                      <ImCheckmark />
                    </span>
                  ) : (
                    <ImCopy />
                  )}
                </button>
              </div>
            </div>
            <div className="input">
              <textarea ref={upper} onChange={handleLength}></textarea>
            </div>
            <div className="controls-btns d-flex d-sm-flex-column gap-1">
              <button onClick={handleUppercase} type="button">
                Text upper case
              </button>
              <button onClick={handleLowercase} type="button">
                Text lower case
              </button>
              <button onClick={handleFirstLetterUpper} type="button">
                Text title case
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
