import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <ul className="list-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/base64-decode">Base64 decode</Link>
        </li>
        <li>
          <Link to="/base64-encode">Base64 encode</Link>
        </li>
        <li>
          <Link to="/age-calculator">Age calculator</Link>
        </li>
        <li>
          <Link to="/generate-password">Generate password</Link>
        </li>
        <li>
          <Link to="/text-tool">Text tool</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
