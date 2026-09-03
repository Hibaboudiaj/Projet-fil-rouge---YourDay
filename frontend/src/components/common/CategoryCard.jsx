import { ArrowRight, Sparkles } from "lucide-react";
import "./CategoryCard.css";

export default function CategoryCard({
  icon: Icon,
  title,
  description,
  prestations,
}) {
  return (
    <div className="category-card">
      <div className="category-card-top-line"></div>

      <div className="category-card-header">
        <div className="category-icon">
          <Icon size={20} />
        </div>

        <div className="category-badge">
          <Sparkles size={11} />
          <span>
            {prestations} PRESTATION{prestations > 1 ? "S" : ""}
          </span>
        </div>
      </div>

      <div className="category-card-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="category-card-footer">
        <span>DÉCOUVRIR</span>

        <div className="category-arrow">
          <ArrowRight size={15} />
        </div>
      </div>
    </div>
  );
}