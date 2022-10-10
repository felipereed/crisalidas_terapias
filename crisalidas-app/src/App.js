import "./App.css";
import Header from "./header/header";
import Cards from "./cards/cards";
import Button from "./common/button";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function App() {
  const [menuOpen, updateMenuOpen] = useState("");

  const handleHamburgerToggle = (opened) => {
    if (opened) {
      updateMenuOpen("app-switch-container-hidden");
    } else {
      updateMenuOpen("");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header toggleHandler={handleHamburgerToggle}></Header>
        <div className={menuOpen}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className="mobile-background-container">
                    <p className="app-call-to-action-text">
                      Psicologia, Terapia Floral e
                      Integrativa.
                    </p>
                    <Button></Button>
                  </div>
                  <h1 className="app-services-title">SERVIÇOS</h1>
                  <Cards />
                  <Contact />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
