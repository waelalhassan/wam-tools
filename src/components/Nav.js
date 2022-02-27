import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const Reful = useRef(this);

  useEffect(() => {
    const child_list = Reful.current.querySelectorAll(".child-list");
    let i = 0;

    child_list.forEach((e) => {
      e.parentElement.addEventListener("click", (f) => {
        f.target.querySelector(".child-list").classList.toggle("active");
      });
    });
  }, []);

  const HandlerMobileNav = (e) => {
    let t = e.target;
    if (e.target.localName == "span") {
      t = t.parentElement;
    }
    t.nextElementSibling.classList.toggle("active");
  };

  return (
    <nav>
      <div className="container">
        <div className="wrapper-nav d-flex d-justify-between d-align-center">
          <div className="brand-name">
            <Link to="/">UR-TOOLS</Link>
          </div>
          <div onClick={HandlerMobileNav} className="btn-nav-mobile active">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="wrapper-nav-list">
            <div className="brand-name-mobile">
              <Link to="/">UR-TOOLS</Link>
            </div>
            <ul ref={Reful} className="d-flex d-justify-between d-align-center">
              <li>
                Generate
                <ul className="child-list">
                  <li>
                    <Link to="/generate-password">Generate password</Link>
                  </li>
                  <li>
                    <Link to="/generate-QRcode">Generate QRcode</Link>
                  </li>
                  <li>
                    <Link to="/generate-shadow">Generate css shadow</Link>
                  </li>
                  <li>
                    <Link to="/generate-MD5-hash">Generate MD5 Hash</Link>
                  </li>
                </ul>
              </li>
              <li>
                Encode/Decode
                <ul className="child-list">
                  <li>
                    <Link to="/base64-decode">Base64 decode</Link>
                  </li>
                  <li>
                    <Link to="/base64-encode">Base64 encode</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/text-tool">Text tool</Link>
              </li>
              <li>
                Convert
                <ul className="child-list">
                  <li>
                    <Link to="/rgb-color-to-hex-color">RGB to hex Color</Link>
                  </li>
                  <li>
                    <Link to="/hex-color-to-rgb-color">RGB to hex Color</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
