import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="wrapper-home-page">
        <div className="container">
          <div className="home-page">
            <header className="p-t-4 p-b-4 text-center">
              <h1>UR-TOOLS</h1>
              <p>Important tools for most users</p>
              <form>
                <input className="w-80" type="text" placeholder="Search ..." />
              </form>
            </header>
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
                  <Link to="/rgb-color-to-hex-color">RGB to hex Color</Link>
                </li>
                <li className="col-3">
                  <Link to="/hex-color-to-rgb-color">Hex color to RGB</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
