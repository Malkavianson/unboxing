import "./index.css";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const change = (i) => {
    const p = value + i;
    setValue(p);
  };

  return (
    <div className="Counter">
      <header className="Counter-header">
        <div>
          <div id="valor">
            <span>{value}</span>
          </div>
          <div>
            <button className="Counter__Button" onClick={() => change(1)}>
              ➕
            </button>
            <button className="Counter__Button" onClick={() => change(-1)}>
              ➖
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Counter;
