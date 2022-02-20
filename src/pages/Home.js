import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <ul className="list-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/base64-decode">base64 decode</Link>
        </li>
        <li>
          <Link to="/base64-encode">base64 encode</Link>
        </li>
        <li>
          <Link to="/age-calculator">age calculator</Link>
        </li>
        <li>
          <Link to="/generate-password">generate password</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
