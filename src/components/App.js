import React from "react";
import Header from "./Header";
import InstrumentsControl from "./Instruments/InstrumentsControl";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <InstrumentsControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
