import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DataViz from "./pages/DataViz";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/dataviz" element={<DataViz />} />
    </Routes>
  );
}

export default App;
