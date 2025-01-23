import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Episode from "./containers/Episode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Episode" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
