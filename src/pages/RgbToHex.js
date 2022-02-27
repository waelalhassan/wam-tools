import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const RgbToHex = () => {
  const [getHextColor, setHextColor] = useState("#0a6fff");
  const [getMsg, setMsg] = useState({ data: "", err: false });
  const [copy, setCopy] = useState(false);

  const inputRGB = useRef(this);
  const previewHEX = useRef(this);
  const RefResult = useRef(this);

  useEffect(() => {
    inputRGB.current.value = "rgb(10, 111, 255)";
  }, []);

  const handleRGB = () => {
    let RGB = inputRGB.current.value;
    let arrayOfnumberRGB = RGB.substring(
      RGB.indexOf("(") + 1,
      RGB.length - 1
    ).split(",");

    if (arrayOfnumberRGB.length == 3) {
      function get_first_digit() {
        return arrayOfnumberRGB.map((number) => {
          let n = number / 16;
          return parseInt(Math.floor(n));
        });
      }

      function get_second_digit() {
        let calcHex = arrayOfnumberRGB.map((number) => {
          return number / 16;
        });
        let calc_float = calcHex.map((number) => {
          let float_n = number
            .toString()
            .substring(number.toString().indexOf(".") + 1);
          return (number = `0.${float_n}`);
        });

        return calc_float.map((number) => {
          return (number = number * 16);
        });
      }

      const orderForHex = [
        get_first_digit()[0],
        get_second_digit()[0],
        get_first_digit()[1],
        get_second_digit()[1],
        get_first_digit()[2],
        get_second_digit()[2],
      ];

      const getHexCode = orderForHex
        .map((number) => {
          if (number == "10") {
            return (number = "A");
          } else if (number == 11) {
            return (number = "B");
          } else if (number == 12) {
            return (number = "C");
          } else if (number == 13) {
            return (number = "D");
          } else if (number == 14) {
            return (number = "E");
          } else if (number == 15) {
            return (number = "F");
          } else if (number == 16) {
            return (number = "G");
          } else if (number == 17) {
            return (number = "H");
          } else if (number == 18) {
            return (number = "I");
          } else if (number == 19) {
            return (number = "J");
          } else if (number == 20) {
            return (number = "K");
          } else if (number == 21) {
            return (number = "L");
          } else if (number == 22) {
            return (number = "M");
          } else if (number == 23) {
            return (number = "N");
          } else if (number == 24) {
            return (number = "O");
          } else if (number == 25) {
            return (number = "P");
          } else if (number == 26) {
            return (number = "Q");
          } else if (number == 27) {
            return (number = "R");
          } else if (number == 28) {
            return (number = "S");
          } else if (number == 29) {
            return (number = "T");
          } else if (number == 30) {
            return (number = "U");
          } else if (number == 31) {
            return (number = "V");
          } else if (number == 32) {
            return (number = "W");
          } else if (number == 33) {
            return (number = "X");
          } else if (number == 34) {
            return (number = "Y");
          } else if (number == 35) {
            return (number = "Z");
          } else {
            return number;
          }
        })
        .join("");

      setHextColor((c) => (c = `#${getHexCode.toLowerCase()}`));
      setMsg((m) => {
        return { ...m, err: false };
      });
    } else {
      setMsg((m) => {
        return { ...m, data: "Invalid RGB color", err: true };
      });
    }
  };

  const handlerCopy = () => {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(getHextColor);
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
  };

  return (
    <>
      <Nav />
      <main className="wrapper-rgb-to-hex">
        <div className="container">
          <div className="rgb-to-hex">
            <header>
              <h1>Convert RGB color to HEX color</h1>
            </header>
            <div className="input">
              <div className="d-flex d-wrap-row">
                <div className="col-6 col-sm-12">
                  <textarea
                    ref={inputRGB}
                    placeholder="Type RGB code here..."
                  ></textarea>
                  {getMsg.err ? (
                    <div className="alert-error">{getMsg.data}</div>
                  ) : (
                    ""
                  )}
                  <div className="controls">
                    <button onClick={handleRGB} type="button">
                      Get Hex color
                    </button>
                  </div>
                </div>
                <div className="col-6 col-sm-12 parent-box-color-preview">
                  <div
                    style={{ backgroundColor: getHextColor }}
                    ref={previewHEX}
                    className="box-color-preview d-grid place-content-center"
                  ></div>
                </div>
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
              <div className="result">
                <p ref={RefResult}>
                {getHextColor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RgbToHex;
