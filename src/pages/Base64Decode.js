import { useRef, useState } from "react";

const Base64Decode = () => {
  const [getCode, setCode] = useState("");
  const [getError, setError] = useState(false);
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

  return (
    <section className="wrapper-base64-decode">
      <div className="input">
        <textarea
          ref={RefInput}
          placeholder="Enter your base64 code here ..."
        ></textarea>
        <button onClick={handledecode} type="button">
          Decode
        </button>
      </div>
      {getError ? (
        <div>Invalid base64 code</div>
      ) : (
        <div className="output">{getCode}</div>
      )}
    </section>
  );
};

export default Base64Decode;
