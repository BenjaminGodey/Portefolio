// == Import components
import Card from "../Card";
// == Import Styles
import "./projects.scss";

// == Import local
import portefolio from "../../assets/img/mon-site.png";
import myWallet from "../../assets/img/my-wallet.png";

// == Component
function Projects() {
  return (
    <section id="projets" className="projects">
      <h1 className="projects__title">
        Pr<span className="projects__title__span">o</span>jets
      </h1>
      <div>
        <Card
          title="Portefolio"
          picture={portefolio}
          link="http://www.benjamingodey.fr"
          presentation="Site perso réalisé avec React"
        />
        <Card
          title="My Wallet"
          picture={myWallet}
          link="https://youtu.be/rxbDbHNwjUE?t=414"
          presentation="Projet de fin de formation, réalisé par 5 personnes (3 back et 2 front) en un mois. "
        />
      </div>
      <p className="projects__coming">
        Et bien d'autres à venir &nbsp;
        <span className="projects__dots"></span>
        <span className="projects__dots"></span>
        <span className="projects__dots"></span>
      </p>
    </section>
  );
}

export default Projects;
