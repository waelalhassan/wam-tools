import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base64Encode from "./pages/Base64Encode";
import Base64Decode from "./pages/Base64Decode";
import GeneratePassword from "./pages/GeneratePassword";
import TextTool from "./pages/TextTool";
import GenerateQRcode from "./pages/GenerateQRcode";
import RgbToHex from "./pages/RgbToHex";
import GenerateShadow from "./pages/GenerateShadow";
import GenerateMD5Hash from "./pages/GenerateMD5Hash";
import HexToRgb from "./pages/HexToRgb";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base64-encode" element={<Base64Encode />} />
        <Route path="/base64-decode" element={<Base64Decode />} />
        <Route path="/generate-password" element={<GeneratePassword />} />
        <Route path="/text-tool" element={<TextTool />}/>
        <Route path="/generate-QRcode" element={<GenerateQRcode />}/>
        <Route path="/rgb-color-to-hex-color" element={<RgbToHex />}/>
        <Route path="/generate-shadow" element={<GenerateShadow />}/>
        <Route path="/generate-MD5-hash" element={<GenerateMD5Hash />}/>
        <Route path="/hex-color-to-rgb-color" element={<HexToRgb />}/>
      </Routes>
    </Router>
  );
};

export default App;