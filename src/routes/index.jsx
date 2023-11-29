import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Second/Profile";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* Outras rotas podem ser adicionadas aqui, se necessário */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;