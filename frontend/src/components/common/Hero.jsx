import { Crown, ArrowRight, Star } from "lucide-react";
import "./Hero.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80"
            alt="Palais de mariage marocain"
          />

          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <Crown size={16} />
                <span>Organisation de Mariage Marocain Traditionnel</span>
              </div>

              <h1>
                L'Art du Mariage Marocain d'Excellence,
                <span>Orchestré avec Prestige & Sérénité.</span>
              </h1>

              <p>
                La première centrale de réservation d'élite dédiée aux mariages
                au Maroc. Accédez à une sélection rigoureuse des plus
                prestigieux Palais & Salles de fête, Neggafas haut de gamme,
                Traiteurs gastronomiques et artistes traditionnels vérifiés.
              </p>
            </div>

            <div className="featured-card">
              <div className="featured-image">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800"
                  alt="Maison du Caftan Haute Couture"
                />

                <div className="image-overlay"></div>

                <div className="prestige-badge">
                  <Star size={11} />
                  N°1 CAFTAN DE PRESTIGE
                </div>

                <div className="available-badge">
                  <span></span>
                  Disponible
                </div>
              </div>

              <div className="featured-info">
                <span className="category">
                  ✨ Caftan Haute Couture & Takchita
                </span>

                <h2>Maison du Caftan Haute Couture - Collection Souss</h2>

                <p>
                  Location et création de Takchita de mariée en velours de soie
                  brodée au fil d'or (Zouak Maalam) et perles Swarovski, avec
                  ceinture Mdamma coordonnée.
                </p>

                <div className="featured-footer">
                  <div className="price">
                    <span>Tarif prestige</span>
                    <strong>8.500 MAD</strong>
                  </div>

                  <button className="reserve-link">
                    Réserver
                    <ArrowRight size={15} /> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;