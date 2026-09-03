import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-title">
            <span className="crown">♕</span>
            <h2>YourDay</h2>
          </div>

          <p>
            La première plateforme marocaine dédiée à
            la préparation et l’organisation de mariages
            traditionnels d’exception. De la Neggafa à la
            salle de fête, planifiez en fonction de votre
            budget.
          </p>

          <div className="made-with">
            ✣ <span>Fait avec amour au Maroc</span> ♥
          </div>

          <div className="socials">
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Website">◎</a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>

          <a href="/">
            <span>›</span> Accueil
          </a>

          <a href="/categories">
            <span>›</span> Les 8 Catégories
          </a>

          <a href="/cart">
            <span>›</span> Mon Panier & Sélection
          </a>

          <a href="/reservation">
            <span>›</span> Demande de Réservation
          </a>
        </div>

        {/* Popular services */}
        <div className="footer-column">
          <h3>Prestations Populaires</h3>

          <a href="#">
            <span>♕</span> Neggafa & Amariya
          </a>

          <a href="#">
            <span>✣</span> Hanae & Henné Traditionnel
          </a>

          <a href="#">
            <span>♜</span> Salles de Fête & Palais
          </a>

          <a href="#">
            <span>◇</span> Caftans & Takchitas
          </a>

          <a href="#">
            <span>♢</span> Accessoires & Bijoux
          </a>

          <a href="#">
            <span>♜</span> Traiteur Marocain
          </a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Villes Couvertes</h3>

          <p className="cities">
            Casablanca, Marrakech, Fès, Rabat, Tanger, Agadir,
            Oujda, Meknès et dans tout le Maroc.
          </p>

          <div className="contact-item">
            <span>⌕</span>
            <p>+212 5 22 00 00 00 / WhatsApp</p>
          </div>

          <div className="contact-item">
            <span>@</span>
            <p>contact@yourday.ma</p>
          </div>

          <div className="contact-item">
            <span>⌖</span>
            <p>Bd Zerktouni, Casablanca, Maroc</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} YourDay. Tous droits réservés.
          Organisation de mariage traditionnel marocain.
        </p>

        <div className="footer-links">
          <a href="#">Conditions d’utilisation</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Espace Prestataires</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;