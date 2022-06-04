import "./index.css";
import { useState } from "react";

function Listing() {
  const [listing, setListing] = useState([]);
  const [value, setValue] = useState("");
  return (
    <div className="Listing">
      <header className="Listing-header">
        <div>
          <div>
            <input
              id="todo_entry"
              type="text"
              onChange={(event) => {
                setValue(event.target.value);
              }}
              placeholder="Todo.list"
            ></input>
            <button
              className="Listing__Button"
              onClick={() => {
                const t = [...listing, value];
                document.querySelector('#todo_entry').value = '';
                setListing(t);
              }}
            >
              Add
            </button>
          </div>
          <ul>
            {listing.map((td, i) => (
              <li key={i}>{td}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Listing;
