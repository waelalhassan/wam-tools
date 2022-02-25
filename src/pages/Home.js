import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  const orginalData = [
    {
      id: 1,
      title: "Generate password",
      uri: "generate-password",
    },
    {
      id: 2,
      title: "Generate QRcode",
      uri: "generate-QRcode",
    },
    {
      id: 3,
      title: "Generate css shadow",
      uri: "generate-shadow",
    },
    {
      id: 4,
      title: "Generate MD5 Hash",
      uri: "generate-MD5-hash",
    },
    {
      id: 5,
      title: "Base64 decode",
      uri: "base64-decode",
    },
    {
      id: 6,
      title: "Base64 encode",
      uri: "base64-encode",
    },
    {
      id: 7,
      title: "Text tool",
      uri: "text-tool",
    },
    {
      id: 8,
      title: "RGB to hex Color",
      uri: "rgb-color-to-hex-color",
    },
    {
      id: 9,
      title: "Hex color to RGB",
      uri: "hex-color-to-rgb-color",
    },
  ];

  const [listTools, setListtools] = useState(orginalData);
  const [isEmpty, setIsEmpty] = useState(true);
  const RefSearch = useRef(this);

  const handlerSearch = (event) => {
    let value = event.target.value;
    let RegEx = new RegExp(value, "ig");

    if (value != "") {
      setListtools((list) => {
        return list.filter((tool) => {
          return tool.title.match(RegEx);
        });
      });
      setIsEmpty((value) => (value = false));
    } else {
      setListtools((list) => {
        return (list = orginalData);
      });
      setIsEmpty((value) => (value = true));
    }
  };

  return (
    <>
      <Nav />
      <main className="wrapper-home-page">
        <div className="container">
          <div className="home-page">
            <header className="p-t-4 p-b-2 text-center">
              <h1>UR-TOOLS</h1>
              <p>Important tools for most users</p>
              <form>
                <input
                  ref={RefSearch}
                  onChange={handlerSearch}
                  className="w-80"
                  type="text"
                  placeholder="Search ..."
                />
              </form>
              {isEmpty == false ? <h3 className="m-t-2">Result: {RefSearch.current.value}</h3> : ""}
            </header>

            <div className="list-tools">
              <ul className="d-flex d-wrap-row d-align-center">
                {listTools.length > 0 ? (
                  listTools.map((tool) => {
                    return (
                      <li key={tool.id} className="col-3">
                        <Link to={`/${tool.uri}`}>{tool.title}</Link>
                      </li>
                    );
                  })
                ) : (
                  <h3 className="no-result m-auto">No results</h3>
                )}
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
