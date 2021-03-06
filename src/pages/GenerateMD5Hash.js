import { useRef, useState } from "react";
import md5 from "blueimp-md5";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import {Helmet} from "react-helmet";

const GenerateMD5Hash = () => {
  const [getMD5, setMD5] = useState("");
  const [copy, setCopy] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const RefInput = useRef(this);
  const RefResult = useRef(this);

  const handlerMD5 = () => {
    if (RefInput.current.value != "") {
      setMD5((text) => (text = md5(RefInput.current.value)));
      setIsEmpty((i) => (i = false));
    } else {
      setIsEmpty((i) => (i = true));
    }
  };

  const handlerCopyMD5 = () => {
    if (getMD5 !== "") {
      if (window.isSecureContext) {
        navigator.clipboard.writeText(getMD5);
        if (window.getSelection) {
          const sele = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(RefResult.current);
          sele.removeAllRanges();
          sele.addRange(range);
        }

        setCopy((c) => (c = true));
        setTimeout(() => {
          setCopy((c) => (c = false));
        }, 1500);
      } else {
        alert("An unexpected error occurred, please try again later");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>MD5 hash generator</title>
      </Helmet>
      <Nav />
      <main className="wrapper-md5-hash">
        <div className="container">
          <div className="md5-hash">
            <header>
              <h1>MD5 hash generator</h1>
              <p>Use this generator to create an MD5 hash of a string</p>
            </header>
            <div className="input">
              <textarea
                ref={RefInput}
                placeholder="Type text here ..."
              ></textarea>
            </div>
            {isEmpty ? (
              <div className="alert-error">Please write text</div>
            ) : (
              ""
            )}
            <div className="controls">
              <button onClick={handlerMD5} type="button">
                Generate
              </button>
            </div>

            <div className="output">
              <div className="task-bar">
                <button onClick={handlerCopyMD5} type="button">
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
                {getMD5 !== "" ? (
                  <p ref={RefResult}>{getMD5}</p>
                ) : (
                  <p>The result will appear here ...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GenerateMD5Hash;
