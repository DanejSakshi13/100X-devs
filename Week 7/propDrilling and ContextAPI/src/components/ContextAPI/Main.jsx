// Main.jsx
import { useState } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function Main() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default Main;
