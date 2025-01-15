import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DataViz from "./pages/DataViz";
import Spline from "./pages/Spline";
import Physics from "./pages/Physics";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/dataviz" element={<DataViz />} />
      <Route path="/spline" element={<Spline />} />
      <Route path="/physics" element={<Physics />} />
    </Routes>
  );
}

export default App;
