import { useEffect, useRef, useState } from "react";

const AgeCalculator = () => {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [] = useState(0);
  const [] = useState(0);

  const Days = useRef(this);
  const Months = useRef(this);
  const Years = useRef(this);

  useEffect(() => {
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const date = new Date();

    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()

    let yy = y - 1994;
    let mm = 11 * 12;
    let dd = d - 6;

    // if (mm < 1) {
    //     yy = yy - 1
    //     console.log("Month " + Math.abs(mm) + Math.abs(mm))
    // }
    console.log(mm);
    // console.log("Year " + yy)
    // console.log("Month " + mm)
    // console.log("Day " + dd)


    const handleBirthday = (from, to, Ref) => {
      let cache = "";
      for (let i = from; i <= to; i++) {
        cache += `<option>${i}</option>`;
      }
      Ref.current.innerHTML = cache;
    };
    handleBirthday(1800, 2022, Years);
    handleBirthday(1, 12, Months);
    handleBirthday(1, 31, Days);
  });

  const HandleCalc = () => {
    setYear((y) => y = 2022 - Years.current.value)
    // setMonth((m) => m = 2 - Months.current.value)
    setDay((d) => (d = 20 - Days.current.value));

    setMonth((m) => {
      const mCalc = 2 - Months.current.value

      if (mCalc < 1) {
        setYear((y) => {
          return y = 2022 - Years.current.value - 1;
        });
        return (m = 2 + Math.abs(mCalc));
      } else {
        setYear((y) => {
            return y = 2022 - Years.current.value
        });
      }
    });
  };

  return (
    <section className="age-calc">
      <div className="input">
        <select ref={Days}></select>
        <select ref={Months}></select>
        <select ref={Years}></select>
        <button onClick={HandleCalc} type="button">
          Calc
        </button>
      </div>
      <div className="output">
        <p>
          {" "}
          Your age is {year} year, and {month} months, and {day} days{" "}
        </p>
      </div>
    </section>
  );
};

export default AgeCalculator;
