import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const change = (i) => {
    const p = value+i
    setValue(p);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div id="valor">
            <span>{value}</span>
          </div>
          <div>
            <button
              className="ProdutoListaItem__Button"
              onClick={() => change(1)}
            >
              ➕
            </button>
            <button
              className="ProdutoListaItem__Button"
              onClick={() => change(-1)}
            >
              ➖
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
