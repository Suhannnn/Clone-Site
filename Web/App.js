import React from "react";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/management/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      {/**title */}
      {/** hot app*/}
      <Footer />
    </div>
  );
}

export default App;
