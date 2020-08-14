import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hello World {`\u{1F680}`}</h1>
      {/* HEADER */}
      <Header />
      {/* SIDEBAR */}
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
