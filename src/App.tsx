import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DataViz from "./pages/DataViz";
import Spline from "./pages/Spline";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/dataviz" element={<DataViz />} />
      <Route path="/spline" element={<Spline />} />
    </Routes>
  );
}

export default App;
