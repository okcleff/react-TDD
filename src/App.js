import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setdisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>

      <br />

      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setdisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
