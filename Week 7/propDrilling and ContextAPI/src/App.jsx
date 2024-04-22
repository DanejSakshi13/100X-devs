import {BrowserRouter, Route, Routes} from "react-router-dom";
import PropDrill from "./components/PropDrill";
import Main from "./components/ContextAPI/MyComponent";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/propdrill' element={<PropDrill />}  />
      <Route path='/context' elements={<Main />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
