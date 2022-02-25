import { useState, useRef, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ImCopy } from "react-icons/im";
import { ImSpinner11 } from "react-icons/im";
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
    setIsCopy((c) => c = true);
    window.navigator.clipboard.writeText(RefCode.current.textContent)
    setTimeout(() => {
      setIsCopy((c) => c = false);
    }, 1000);
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
              <p>With this tool, you can quickly create a CSS box-shadow for your website. It comes with many options and it appears instantly.</p>
            </header>
            <div className="input d-flex d-justify-between d-align-center">
              <div className="controls">
                <div className="controls-1">
                  <form>
                    <label htmlFor="outset">Outset</label>
                    <input
                      onChange={handlerType}
                      data-type="outset"
                      type="radio"
                      defaultChecked
                      name="type_shadow"
                      id="outset"
                    />
                    <label htmlFor="inset">Inset</label>
                    <input
                      onChange={handlerType}
                      data-type="inset"
                      type="radio"
                      name="type_shadow"
                      id="inset"
                    />
                  </form>
                </div>
                <div className="controls-2">
                  <div className="parent-radio">
                    <label>X offset</label>
                    <input
                      onChange={handlerXOffset}
                      type="range"
                      min={0}
                      defaultValue={0}
                      max={20}
                    />
                    <span>{XOffset}</span>
                  </div>
                  <div className="parent-radio">
                    <label>Y offset</label>
                    <input
                      onChange={handlerYOffset}
                      type="range"
                      min={0}
                      defaultValue={0}
                      max={20}
                    />
                    <span>{YOffset}</span>
                  </div>
                  <div className="parent-radio">
                    <label>Blur</label>
                    <input
                      onChange={handlerBlur}
                      type="range"
                      min={0}
                      defaultValue={0}
                      max={20}
                    />
                    <span>{Blur}</span>
                  </div>
                  <div className="parent-radio">
                    <label>Spread</label>
                    <input
                      onChange={handlerSpread}
                      type="range"
                      min={0}
                      defaultValue={0}
                      max={20}
                    />
                    <span>{Spread}</span>
                  </div>
                  <div className="parent-radio">
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
                    <span>
                      <ImCopy />
                    </span>
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
