import { useState, useRef } from "react";

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

  return (
    <section className="text-tool">
      <div className="output">
        <span>Number of characters: {numChar}</span>
        <span>Number of words: {numWords}</span>
      </div>
      <div className="input">
        <textarea ref={upper} onChange={handleLength}></textarea>
      </div>
      <div className="controls-btns">
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
    </section>
  );
};

export default TextTool;