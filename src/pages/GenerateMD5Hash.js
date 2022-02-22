import { useRef, useState } from "react";
import md5 from "blueimp-md5";

const GenerateMD5Hash = () => {
  const [getMD5, setMD5] = useState("");
  const RefInput = useRef(this);

  const handlerMD5 = () => {
    setMD5((text) => (text = md5(RefInput.current.value)));
  };

  const handlerCopyMD5 = (event) => {
    navigator.clipboard.writeText(getMD5);
    event.target.textContent = "Copied";
    setTimeout(() => {
      event.target.textContent = "Copy";
    }, 1500);
  };

  return (
    <section className="md5-hash">
      <div className="input">
        <textarea ref={RefInput}></textarea>
        <button onClick={handlerMD5} type="button">
          Generate
        </button>
      </div>
      {getMD5 !== "" && (
        <div className="output">
          <p>Your String {RefInput.current.value}</p>
          <p>
            MD5 Hash {getMD5} <span onClick={handlerCopyMD5}>Copy</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default GenerateMD5Hash;
