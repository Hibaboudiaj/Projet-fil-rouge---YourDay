import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Accueil from "./pages/Accueil";
import Categories from "./pages/Categories";
// import Contact from "./pages/Contact";
import Panier from "./pages/Panier";
// import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Reservation from "./pages/Reservation";

import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reservation" element={<Reservation />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/cart" element={<Panier />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
