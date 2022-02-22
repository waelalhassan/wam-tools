import { useState, useRef, useEffect } from "react";

const GenerateShadow = () => {
  const [XOffset, setXOffset] = useState(3);
  const [YOffset, setYOffset] = useState(1);
  const [Blur, setBlur] = useState(12);
  const [Spread, setSpread] = useState(0);
  const [Color, setColor] = useState("#d6d6d6");
  const [BoxShadow, setBoxShadow] = useState("");
  const [getType, setType] = useState("outset");

  const RefForm = useRef(this);

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

  useEffect(() => {
    setBoxShadow((shadow) => {
      return (shadow = `${
        getType == "inset" ? "inset" : ""
      } ${XOffset}px ${YOffset}px ${Blur}px ${Spread}px ${Color}`);
    });
  }, [XOffset, YOffset, Blur, Spread, Color, getType]);

  const boxReview = {
    margin: "70px",
    width: "200px",
    height: "200px",
    backgroundColor: "#FFF",
    boxShadow: BoxShadow,
  };

  return (
    <section className="gene-shadow">
      <div className="input">
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
          <input onChange={handlerColor} defaultValue={Color} type="color" />
        </div>
      </div>
      <div className="output">
        <div>{BoxShadow}</div>
        <div style={boxReview} className="box-review"></div>
      </div>
    </section>
  );
};

export default GenerateShadow;
