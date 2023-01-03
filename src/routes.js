import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Header from "./pages/Header";

import Home from "./pages/Home";
import Abount from "./pages/Abount";
import Produto from "./pages/Produto";

function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abount" element={<Abount />} />
        <Route path="/produto/:id" element={<Produto />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
