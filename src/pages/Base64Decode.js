import { useRef, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const Base64Decode = () => {
  const [getCode, setCode] = useState("");
  const [getError, setError] = useState(false);
  const [copy, serCopy] = useState(false);
  const RefInput = useRef(this);

  const handledecode = () => {
    function is64() {
      if (RefInput.current.value == "" || RefInput.current.value.trim() == "")
        return false;
      try {
        return btoa(atob(RefInput.current.value)) == RefInput.current.value;
      } catch (err) {
        return false;
      }
    }

    if (is64()) {
      setError((er) => (er = false));
      setCode((code) => (code = atob(RefInput.current.value)));
    } else {
      setError((er) => (er = true));
    }
  };

  const handlerCopy = () => {
    window.navigator.clipboard.writeText(getCode);
    serCopy((c) => (c = true));
    setTimeout(() => {
      serCopy((c) => (c = false));
    }, 1500);
  };

  return (
    <>
      <Nav />
      <main className="wrapper-base64-decode">
        <div className="container">
          <div className="base64-decode">
            <header>
              <h1>Base64 decode</h1>
            </header>
            <div className="input">
              <textarea
                ref={RefInput}
                placeholder="Enter your base64 code here ..."
              ></textarea>
            </div>
            {getError ? (
              <div className="alert-error">Invalid base64 code</div>
            ) : (
              ""
            )}
            <div className="controls">
              <button onClick={handledecode} type="button">
                Decode
              </button>
            </div>
            <div className="output">
              <div className="task-bar">
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
              <div className="result">
                {getCode != "" ? (
                  <p>{getCode}</p>
                ) : (
                  <p>The text will appear here ...</p>
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

export default Base64Decode;
