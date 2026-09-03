import { Award, ShieldCheck } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-agency">
      <div className="about-container">
        <div className="about-content">
          
          <div className="about-badge">
            <Award size={14} />
            <span>À propos de l'agence YourDay</span>
          </div>

          <h2 className="about-title">
            L'Excellence du Mariage Marocain,
            <br />
            Centralisée en Une Seule Signature
          </h2>

          {/* Description */}
          <p className="about-description">
            Organiser un mariage marocain traditionnel nécessite d'orchestrer
            avec précision des dizaines de prestataires d'exception : de la
            majestueuse Neggafa aux palais historiques, en passant par l'art
            ancestral de la Hanae et la gastronomie royale.
          </p>

          <p className="about-description secondary">
            YourDay simplifie ce voyage en regroupant sur une seule plateforme
            vérifiée l'ensemble des experts de votre grand jour. Vous comparez
            en toute transparence, composez votre panier personnalisé et
            bénéficiez d'un accompagnement humain et sur mesure.
          </p>


          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">+150</div>
              <div className="stat-title">Mariages Célébrés</div>
              <div className="stat-description">À travers tout le Maroc</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">8 Catégories</div>
              <div className="stat-title">D'Élite Vérifiée</div>
              <div className="stat-description">
                Salles, Neggafa, Traiteur...
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-title">Tarifs Transparents</div>
              <div className="stat-description">Aucun frais caché</div>
            </div>
          </div>
        </div>


        <div className="about-visual">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
              alt="Célébration d'un mariage marocain traditionnel"
              className="about-image"
            />

            <div className="image-overlay"></div>
          </div>


          <div className="guarantee-card">
            <div className="guarantee-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <div className="guarantee-title">Garantie Sérénité YourDay</div>

              <div className="guarantee-description">
                Prestataires & dates vérifiés en temps réel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
