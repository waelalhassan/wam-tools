import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Base64Encode = () => {
  const [encode, setEncode] = useState("");
  const Ref = useRef();

  const handleEncode = () => {
    setEncode((e) => (e = btoa(Ref.current.value)));
  };

  const alert = document.createElement("div");
  const copyToClipboard = (e) => {
    e.target.style.backgroundColor = "yellow";
    navigator.clipboard.writeText(e.target.textContent);
    alert.textContent = "Copyed";
    e.target.parentElement.appendChild(alert);
    setTimeout(() => {
      alert.remove();
      e.target.style.backgroundColor = "";
    }, 1000);
  };

  return (
    <>
      <Nav />
      <section className="wrapper-base64-encode">
        <div className="input">
          <textarea ref={Ref} placeholder="Enter text here .."></textarea>
          <button onClick={handleEncode} type="button">
            Encode
          </button>
        </div>
        <div
          style={{ display: "inline-block" }}
          onClick={copyToClipboard}
          className="output"
          id="base64-e-output"
        >
          {encode}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Base64Encode;
