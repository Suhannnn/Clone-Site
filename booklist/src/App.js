import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Bookstore from "./components/lists/Bookstore";

function App() {
  return (
    <div className="app">
      <Nav />
      <Bookstore />
      {/**nav bar */}
      {/*booklist*/}
    </div>
  );
}

export default App;
