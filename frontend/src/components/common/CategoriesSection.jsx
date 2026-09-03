import {
  ArrowRight,
  Camera,
  Crown,
  Diamond,
  Feather,
  Music,
  Sparkles,
  Utensils,
  Building2,
} from "lucide-react";

import CategoryCard from "../common/CategoryCard";
import "./CategoriesSection.css";

const categories = [
  {
    id: 1,
    title: "Neggafa & Ziana",
    description:
      "Stylistes traditionnelles, Amaria, Trônes royaux, Tyafer et essayages de tenues royales.",
    prestations: 2,
    icon: Crown,
  },

  {
    id: 2,
    title: "Hanae (Henna)",
    description:
      "Artistes spécialistes du henné traditionnel marocain et motifs fassi/marrakchi raffinés.",
    prestations: 1,
    icon: Feather,
  },

  {
    id: 3,
    title: "Salles de Fête & Palais",
    description:
      "Salles prestigieuses, Palais d’hôtes et Riads pour célébrer votre grand jour.",
    prestations: 2,
    icon: Building2,
  },

  {
    id: 4,
    title: "Caftans & Takchitas",
    description:
      "Caftans haute couture, Takchitas de mariée, Gandouras et Jabadors pour le marié.",
    prestations: 1,
    icon: Sparkles,
  },

  {
    id: 5,
    title: "Accessoires & Bijoux",
    description:
      "Couronnes royales (Kssa), Bijoux en or et argent fassi, Khalkhal et Babouches brodées.",
    prestations: 1,
    icon: Diamond,
  },

  {
    id: 6,
    title: "Traiteur Marocain",
    description:
      "Gastronomie marocaine raffinée: Pastilla, Méchoui, Gâteaux marocains et Thé à la menthe.",
    prestations: 1,
    icon: Utensils,
  },

  {
    id: 7,
    title: "Orchestre & Dakka",
    description:
      "Orchestres Chaabi, Andalous, Dakka Marrakchia, Issawa et Djayine.",
    prestations: 1,
    icon: Music,
  },

  {
    id: 8,
    title: "Photographe & Vidéo",
    description:
      "Couverture photo et vidéo HD/4K, Drones et albums personnalisés de mariage.",
    prestations: 1,
    icon: Camera,
  },
];

export default function CategoriesSection() {
  return (
    <section className="categories-section">

      <div className="categories-header">

        <div className="categories-intro">

          <div className="section-badge">
            <Crown size={13} />
            <span>NOS SECTEURS SPÉCIALISÉS</span>
          </div>

          <h2>Catégories Principales</h2>

          <p>
            Explorez nos 8 secteurs d'excellence pour composer un mariage
            marocain d'exception, alliant tradition royale et raffinement.
          </p>

        </div>


        <button className="catalogue-button">
          <span>VOIR LE CATALOGUE COMPLET</span>
          <ArrowRight size={15} />
        </button>

      </div>

      <div className="categories-grid">

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            description={category.description}
            prestations={category.prestations}
          />
        ))}

      </div>

    </section>
  );
}