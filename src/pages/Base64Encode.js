import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const Base64Encode = () => {
  const [encode, setEncode] = useState("");
  const [copy, setCopy] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const Ref = useRef();

  const handleEncode = () => {
    if (Ref.current.value.trim() != "") {
      setEncode((e) => (e = btoa(Ref.current.value)));
      setIsEmpty((i) => (i = false));
    } else {
      setIsEmpty((i) => (i = true));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encode);
    setCopy((c) => (c = true));
    setTimeout(() => {
      setCopy((c) => (c = false));
    }, 1500);
  };

  return (
    <>
      <Nav />
      <main className="wrapper-base64-encode">
        <div className="container">
          <div className="base64-encode">
            <header>
              <h1>Base64 encode</h1>
              <p>Through this tool you can encode text via Base64</p>
            </header>
            <div className="input">
              <textarea ref={Ref} placeholder="Enter text here .."></textarea>
            </div>
            {isEmpty ? (
              <div className="alert-error">Please write text</div>
            ) : (
              ""
            )}
            <div className="controls">
              <button onClick={handleEncode} type="button">
                Encode
              </button>
            </div>
            <div className="output">
              <div className="task-bar">
                <button onClick={copyToClipboard} type="button">
                  {copy ? (
                    <span>
                      <ImCheckmark />
                    </span>
                  ) : (
                    <ImCopy />
                  )}
                </button>
              </div>
              <div className="result">
                {encode == "" ? "Base64 code will appear here ..." : encode}
              </div>
            </div>
            <div className="about">
              <h2>What is base 64 encoding</h2>
              <p>
                When you have some binary data that you want to ship across a
                network, you generally don't do it by just streaming the bits
                and bytes over the wire in a raw format. Why? because some media
                are made for streaming text. You never know -- some protocols
                may interpret your binary data as control characters (like a
                modem), or your binary data could be screwed up because the
                underlying protocol might think that you've entered a special
                character combination (like how FTP translates line endings).
              </p>

              <p>
                So to get around this, people encode the binary data into
                characters. Base64 is one of these types of encodings.
              </p>

              <h2>Why 64?</h2>
              <p>
                Because you can generally rely on the same 64 characters being
                present in many character sets, and you can be reasonably
                confident that your data's going to end up on the other side of
                the wire uncorrupted.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Base64Encode;
