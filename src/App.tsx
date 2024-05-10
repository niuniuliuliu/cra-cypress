import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onCountClick = useCallback(() => {
    setCount((x) => x + 1);
  }, []);
  return (
    <div style={{ height: "200px", margin: "0 auto", width: "100%" }}>
      <button data-testid="count_button" onClick={onCountClick}>
        click to count
      </button>
      <div data-testid="count_value">{count}</div>
    </div>
  );
}

export default App;
