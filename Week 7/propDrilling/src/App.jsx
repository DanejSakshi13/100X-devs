import {BrowserRouter, Route, Routes} from "react-router-dom";
import PropDrill from "./components/PropDrill";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/propdrill' element={<PropDrill />}  />
     </Routes>
    </BrowserRouter>
  )
}

export default App
