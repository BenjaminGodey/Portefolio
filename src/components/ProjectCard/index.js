// == Import NPM
import { useState, useEffect } from "react";

// == Import Style
import "./projectcard.scss";

// == Component

function ProjectCard({ picture, title, presentation, link, id }) {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowCard(window.scrollY > window.innerHeight * 2.7);
    });
    return () => window.removeEventListener("scroll", setShowCard);
  }, []);

  return (
    <div
      className={
        showCard ? `project-card project-card${id}--show` : `project-card`
      }
    >
      <div className="project-card__up">
        <img
          src={picture}
          className="project-card__picture"
          alt="screenshot du projet"
        />
      </div>
      <div className="project-card__down">
        <h2 className="project-card__title">{title}</h2>

        <p className="project-card__presentation">{presentation}</p>
        <a className="project-card__link" href={link}>
          Voir le site
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
