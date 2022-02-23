import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="wrapper-nav d-flex d-justify-between d-align-center">
          <div className="brand-name">
            <Link to="/">UR-TOOLS</Link>
          </div>
          <ul className="d-flex d-justify-between d-align-center">
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
              </ul>
            </li>
            <li>
            Calculators
              <ul className="child-list">
                <li>
                  <Link to="/age-calculator">Age calculator</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;