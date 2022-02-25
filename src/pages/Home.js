import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <div className="list-tools">
            <ul className="d-flex d-wrap-row d-align-center">
              <li className="col-3">
                <Link to="/generate-password">Generate password</Link>
              </li>
              <li className="col-3">
                <Link to="/generate-QRcode">Generate QRcode</Link>
              </li>
              <li className="col-3">
                <Link to="/generate-shadow">Generate css shadow</Link>
              </li>
              <li className="col-3">
                <Link to="/generate-MD5-hash">Generate MD5 Hash</Link>
              </li>
              <li className="col-3">
                <Link to="/base64-decode">Base64 decode</Link>
              </li>
              <li className="col-3">
                <Link to="/base64-encode">Base64 encode</Link>
              </li>
              <li className="col-3">
                <Link to="/text-tool">Text tool</Link>
              </li>
              <li className="col-3">
                <Link to="/age-calculator">Age calculator</Link>
              </li>
              <li className="col-3">
                <Link to="/rgb-color-to-hex-color">RGB to hex Color</Link>
              </li>
              <li className="col-3">
                <Link to="/hex-color-to-rgb-color">Hex color to RGB</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
