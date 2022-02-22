import { useState, useRef, useEffect } from "react";

const GenerateShadow = () => {
  const [XOffset, setXOffset] = useState(0);
  const [YOffset, setYOffset] = useState(0);
  const [Blur, setBlur] = useState(0);
  const [Spread, setSpread] = useState(0);
  const [Color, setColor] = useState("#000000");
  const [BoxShadow, setBoxShadow] = useState("");

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

  useEffect(() => {
    setBoxShadow((shadow) => {
      return (shadow = `${XOffset}px ${YOffset}px ${Blur}px ${Spread}px ${Color}`);
    });
  }, [XOffset, YOffset, Blur, Spread, Color]);

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
            <input type="radio" defaultChecked name="type_shadow" id="outset" />
            <label htmlFor="inset">Inset</label>
            <input type="radio" name="type_shadow" id="inset" />
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
          <input onChange={handlerColor} type="color" />
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
