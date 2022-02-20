import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base64Encode from "./pages/Base64Encode";
import Base64Decode from "./pages/Base64Decode";
import AgeCalculator from "./pages/AgeCalculator";
import GeneratePassword from "./pages/GeneratePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base64-encode" element={<Base64Encode />} />
        <Route path="/base64-decode" element={<Base64Decode />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/generate-password" element={<GeneratePassword />} />
      </Routes>
    </Router>
  );
};

export default App;



// export 'Switch' (imported as 'Switch') was not found in 'react-router-dom' (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate, Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createRoutesFromChildren, createSearchParams, generatePath, matchPath, matchRoutes, renderMatches, resolvePath, unstable_HistoryRouter, useHref, useInRouterContext, useLinkClickHandler, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams)
