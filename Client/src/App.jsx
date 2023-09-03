import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Catalog from "./pages/catalog.pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./components/organisms/navBar";
import { Footer } from "./components/organisms/footer";
import { Contact } from "./components/organisms/contact";

function App() {
  const pages = ["estadio", "objeto", "pokemon", "partidario", "herramienta"];
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Catalog />} />
          {pages.map((page) => (
            <Route path={`/${page}`} element={<Catalog filter={page} />} />
          ))}
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </StyleSheetManager>
  );
}

export default App;
