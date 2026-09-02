import { Link } from "react-router-dom";
import { Crown, Heart, ShieldCheck } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          <div className="logo-circle">
            <div className="logo-inner">
              <Crown size={27} strokeWidth={2} />
            </div>
          </div>

          <div>
            <div className="brand-name">YourDay</div>
            <div className="subtitle">Mariage Marocain</div>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link active">
            Accueil
          </Link>

          <Link to="/categories" className="nav-link">
            Catégories
          </Link>

          <Link to="/reservation" className="nav-link">
            Réservation
          </Link>
        </nav>

        <div className="actions">
          <Link to="/cart" className="cart">
            <Heart size={17} strokeWidth={1.8} />
            <span>Panier</span>
          </Link>

          <Link to="/admin" className="admin">
            <ShieldCheck size={17} strokeWidth={1.8} />
            <span>Admin</span>
          </Link>
        </div>

      </div>
    </header>
  );
}