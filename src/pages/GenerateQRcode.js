import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const GenerateQRcode = () => {
  const srcImg = useRef(this);
  const inputText = useRef(this);

  const [checkForDownload, setCheck] = useState(false);

  const alert = document.createElement("div");
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
    } else {
      alert.textContent = "text empty";
      inputText.current.parentElement.appendChild(alert);
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
      <section className="gene-qrcode">
        <div className="input">
          <input ref={inputText} type="text" />
          <button onClick={handleGenQR} type="button">
            Generate
          </button>

          {checkForDownload && (
            <button onClick={handleDownloadQr} type="button">
              Download
            </button>
          )}
        </div>
        <div ref={srcImg} className="output"></div>
      </section>
      <Footer />
    </>
  );
};

export default GenerateQRcode;
