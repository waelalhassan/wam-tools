import { useState, useRef } from "react";

const TextTool = () => {
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

  return (
    <section className="text-tool">
      <div className="input">
        <textarea ref={upper}></textarea>
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
      <div className="output"></div>
    </section>
  );
};

export default TextTool;