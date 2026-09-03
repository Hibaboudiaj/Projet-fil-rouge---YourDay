import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-brand">
          <h2>YourDay</h2>

          <p>
            L'excellence du mariage marocain,
            <br />
            centralisée en une seule signature.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <Instagram size={17} />
            </a>

            <a href="#" aria-label="Facebook">
              <Facebook size={17} />
            </a>
          </div>
        </div>

        
        <div className="footer-column">
          <h3>Navigation</h3>

          <a href="/">Accueil</a>
          <a href="/categories">Catégories</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Panier</a>
        </div>

        
        <div className="footer-column">
          <h3>Nos catégories</h3>

          <a href="/categories/neggafa">Neggafa</a>
          <a href="/categories/salles">Salles de fête</a>
          <a href="/categories/traiteur">Traiteur</a>
          <a href="/categories/photographie">Photographie</a>
        </div>

        
        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <div className="contact-item">
            <MapPin size={16} />
            <span>Casablanca, Maroc</span>
          </div>

          <div className="contact-item">
            <Phone size={16} />
            <span>+212 5 22 00 00 00</span>
          </div>

          <div className="contact-item">
            <Mail size={16} />
            <span>contact@yourday.ma</span>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} YourDay. Tous droits réservés.
        </p>

        <div className="footer-legal">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;