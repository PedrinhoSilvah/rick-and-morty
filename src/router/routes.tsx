import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "Pages/Home";
import Characters from "Pages/Characters";
import Episode from "Pages/Episode";

const AppRoutes = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Episode" element={<Episode />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
