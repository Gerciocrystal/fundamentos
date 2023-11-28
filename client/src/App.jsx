import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeAdmin from "./pages/admin/Home";
import SingleOrder from "./pages/SingleOrder";
import { useState } from "react";
import Report from "./pages/Report";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home isVisible={isVisible} setVisible={setVisible} />}
      />
      <Route
        path="/comprar/:id"
        element={<SingleOrder isVisible={isVisible} setVisible={setVisible} />}
      />
      <Route path="/recibo" element={<Report />} />
      <Route path="/admin/home" element={<HomeAdmin />} />
      <Route path="/login" element={<Login />} />
      {/* page Not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
