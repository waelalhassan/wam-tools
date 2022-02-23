import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const GenerateQRcode = () => {
  const srcImg = useRef(this);
  const inputText = useRef(this);

  const [checkForDownload, setCheck] = useState(false);
  const [getMsg, setMsg] = useState("");
  const [msg1, setMsg1] = useState("QR code");

  const handleGenQR = () => {
    if (inputText.current.value != "") {
      fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.current.value}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.blob())
        .then((result) => {
          getBlob(result);
        });
      function getBlob(b) {
        if (srcImg.current.children.length > 0) {
          srcImg.current.children[0].remove();
        }
        let img = new Image();
        let fa = window.URL.createObjectURL(b);
        img.src = fa;
        window.URL.revokeObjectURL(img);
        srcImg.current.appendChild(img);

        if (srcImg.current.children.length == 1) {
          setCheck((c) => (c = true));
        }
      }
      setMsg((m) => (m = ""));
      setMsg1((m) => (m = ""));
    } else {
      setMsg((m) => (m = "Please write text"));
    }
  };

  const handleDownloadQr = () => {
    const a = document.createElement("a");
    const img = srcImg.current.children[0];
    a.href = img.src;
    a.download = "image.png";
    a.click();
  };

  return (
    <>
      <Nav />
      <main className="wrapper-gene-qrcode">
        <div className="container">
          <div className="gene-qrcode">
            <header className="text-center">
              <h1>QR code generator</h1>
              <p>Generate QR Code Easily for Free</p>
            </header>
            <div className=" input">
              <input
                ref={inputText}
                type="text"
                placeholder="Type a text here or a URL.."
              />
              {getMsg === "" ? "" : <div className="alert-error">{getMsg}</div>}
              <div className="btns d-flex d-justify-around">
                <button onClick={handleGenQR} type="button">
                  Generate
                </button>
                {checkForDownload && (
                  <button className="btn-download" onClick={handleDownloadQr} type="button">
                    Download
                  </button>
                )}
              </div>
            </div>
            <div ref={srcImg} className="d-grid place-content-center output">
              {msg1 === "" ? "" : <div className="QR-code">{msg1}</div>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GenerateQRcode;
