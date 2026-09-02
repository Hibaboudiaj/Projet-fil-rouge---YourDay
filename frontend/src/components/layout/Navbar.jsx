import { Link, NavLink } from "react-router-dom";
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Catégories
          </NavLink>

          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Réservation
          </NavLink>
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
