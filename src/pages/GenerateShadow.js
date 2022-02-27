import { useState, useRef, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const GenerateShadow = () => {
  const [XOffset, setXOffset] = useState(3);
  const [YOffset, setYOffset] = useState(1);
  const [Blur, setBlur] = useState(12);
  const [Spread, setSpread] = useState(0);
  const [Color, setColor] = useState("#d6d6d6");
  const [BoxShadow, setBoxShadow] = useState("");
  const [getType, setType] = useState("outset");
  const [isCopy, setIsCopy] = useState(false);

  const RefCode = useRef(this);

  const handlerXOffset = (event) => {
    setXOffset((x) => (x = event.target.value));
  };

  const handlerYOffset = (event) => {
    setYOffset((x) => (x = event.target.value));
  };

  const handlerBlur = (event) => {
    setBlur((x) => (x = event.target.value));
  };

  const handlerSpread = (event) => {
    setSpread((x) => (x = event.target.value));
  };

  const handlerColor = (event) => {
    setColor((color) => (color = event.target.value));
  };

  const handlerType = (event) => {
    if (event.target.getAttribute("data-type") === "inset") {
      setType((t) => (t = "inset"));
    } else {
      setType((t) => (t = "outset"));
    }
  };

  const handlerCopy = () => {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(RefCode.current.textContent);
      copyText(RefCode.current);
      setIsCopy((c) => (c = true));
      setTimeout(() => {
        setIsCopy((c) => (c = false));
      }, 1000);
    } else {
      alert("An unexpected error occurred, please try again later");
    }

    function copyText(ele) {
      if (window.getSelection) {
        const sele = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(ele);
        sele.removeAllRanges();
        sele.addRange(range);
      }
    }
  };

  useEffect(() => {
    setBoxShadow((shadow) => {
      return (shadow = `${
        getType == "inset" ? "inset" : ""
      } ${XOffset}px ${YOffset}px ${Blur}px ${Spread}px ${Color}`);
    });

    RefCode.current.innerHTML = `-moz-box-shadow:${BoxShadow};<br>-webkit-box-shadow: ${BoxShadow};<br> box-shadow:${BoxShadow};`;
  }, [BoxShadow, XOffset, YOffset, Blur, Spread, Color, getType]);

  const boxReview = {
    width: "200px",
    height: "200px",
    backgroundColor: "#FFF",
    boxShadow: BoxShadow,
  };

  return (
    <>
      <Nav />
      <main className="wrapper-gene-shadow">
        <div className="container">
          <div className="gene-shadow">
            <header>
              <h1>Box shadow generator</h1>
              <p>
                With this tool, you can quickly create a CSS box-shadow for your
                website. It comes with many options and it appears instantly.
              </p>
            </header>
            <div className="input d-flex d-justify-between d-align-center d-sm-flex-column row-sm-gap-2">
              <div className="controls w-sm-100">
                <div className="controls-1">
                  <form className="d-flex d-justify-around">
                    <div className="radio-btn">
                      <label htmlFor="outset">Outset</label>
                      <input
                        onChange={handlerType}
                        data-type="outset"
                        type="radio"
                        defaultChecked
                        name="type_shadow"
                        id="outset"
                      />
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div className="radio-btn">
                      <label htmlFor="inset">Inset</label>
                      <input
                        onChange={handlerType}
                        data-type="inset"
                        type="radio"
                        name="type_shadow"
                        id="inset"
                      />
                      <span>
                        <i></i>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="controls-2">
                  <div className="parent-range">
                    <div className="d-flex d-justify-between range-info">
                      <label>X offset: </label>
                      <span>
                        {" "}
                        <b>{XOffset}</b>
                      </span>
                    </div>
                    <input
                      onChange={handlerXOffset}
                      type="range"
                      min={-50}
                      defaultValue={0}
                      max={50}
                    />
                  </div>
                  <div className="parent-range">
                    <div className="d-flex d-justify-between range-info">
                      <label>Y offset</label>
                      <span>
                        <b>{YOffset}</b>
                      </span>
                    </div>
                    <input
                      onChange={handlerYOffset}
                      type="range"
                      min={-50}
                      defaultValue={0}
                      max={50}
                    />
                  </div>
                  <div className="parent-range">
                    <div className="d-flex d-justify-between range-info">
                      <label>Blur</label>
                      <span>
                        <b>{Blur}</b>
                      </span>
                    </div>
                    <input
                      onChange={handlerBlur}
                      type="range"
                      min={0}
                      defaultValue={0}
                      max={50}
                    />
                  </div>
                  <div className="parent-range">
                    <div className="d-flex d-justify-between range-info">
                      <label>Spread</label>
                      <span>
                        <b>{Spread}</b>
                      </span>
                    </div>
                    <input
                      onChange={handlerSpread}
                      type="range"
                      min={0}
                      defaultValue={0}
                      max={50}
                    />
                  </div>
                  <div className="parent-color d-flex d-justify-between">
                    <label>Color</label>
                    <input
                      onChange={handlerColor}
                      defaultValue={Color}
                      type="color"
                    />
                  </div>
                </div>
              </div>
              <div
                style={boxReview}
                className="box-review d-grid place-content-center"
              >
                <span>Preview</span>
              </div>
            </div>
            <div className="output">
              <div className="task-bar">
                <button onClick={handlerCopy} type="button">
                  {isCopy ? (
                    <span>
                      <ImCheckmark />
                    </span>
                  ) : (
                    <ImCopy />
                  )}
                </button>
              </div>
              <div ref={RefCode} className="result"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GenerateShadow;
