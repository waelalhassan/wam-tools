import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const HexToRgb = () => {
  const [getRGB, setRGB] = useState("rgb(10, 111, 255)");
  const [errMsg, setErrMsg] = useState(false);
  const [copy, setCopy] = useState(false);
  const RefHex = useRef(this);

  useEffect(() => {
    RefHex.current.value = "#0a6fff";
  }, []);

  const handlerHex = () => {
    const HexColor = RefHex.current.value;
    let r, g, b;
    let rightLength = true;

    if (HexColor.startsWith("#")) {
      r = parseInt(HexColor.slice(1, 3), 16);
      g = parseInt(HexColor.slice(3, 5), 16);
      b = parseInt(HexColor.slice(5, 7), 16);
      HexColor.slice(1).length == 6
        ? (rightLength = true)
        : (rightLength = false);
    } else {
      r = parseInt(HexColor.slice(0, 2), 16);
      g = parseInt(HexColor.slice(2, 4), 16);
      b = parseInt(HexColor.slice(4, 6), 16);
      HexColor.slice(0).length == 6
        ? (rightLength = true)
        : (rightLength = false);
    }

    if (rightLength) {
      setRGB((RGB) => (RGB = `rgb(${r}, ${g}, ${b})`));
      setErrMsg((m) => (m = false));
    } else {
      setErrMsg((m) => (m = true));
    }
  };

  const handlerCopy = () => {
    window.navigator.clipboard.writeText(getRGB);
    setCopy((c) => (c = true));
    setTimeout(() => {
      setCopy((c) => (c = false));
    }, 1500);
  };

  const BoxStyle = {
    backgroundColor: getRGB,
  };

  return (
    <>
      <Nav />
      <main className="wrapper-hex-to-rgb">
        <div className="container">
          <div className="hex-to-rgb">
            <header>
              <h1>Convert HEX color to RGB color</h1>
            </header>
            <div className="input d-flex d-wrap-row d-justify-center">
              <div className="col-6 col-sm-12">
                <textarea
                  ref={RefHex}
                  placeholder="Type Hex color here..."
                ></textarea>
                {errMsg ? (
                  <div className="alert-error">Not a hex color code</div>
                ) : (
                  ""
                )}
                <div className="controls">
                  <button onClick={handlerHex} type="button">
                    get rgb color
                  </button>
                </div>
              </div>
              <div className="col-6 col-sm-12 parent-box-color-preview">
                <div style={BoxStyle} className="box-color-preview"></div>
              </div>
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
              <div className="result">{getRGB}</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HexToRgb;
