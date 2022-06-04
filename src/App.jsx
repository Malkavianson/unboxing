import "./App.css";
import Listing from "./components/Listing";
import Counter from "./components/Counter";
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Listing />
      </header>
    </div>
  );
}

export default App;
