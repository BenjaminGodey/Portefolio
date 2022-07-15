// == Import NPM
import Slider from "react-slick";


// == Import components
import ProjectCard from "../ProjectCard";
// == Import Styles
import "./projects.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// == Import local
import harry from "../../assets/img/projects/harry.jpeg";
import myWallet from "../../assets/img/projects/mywallet.jpeg";
import chezBenj from "../../assets/img/projects/chezbenj.jpeg";

// == Component
function Projects() {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 965,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 704,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };
  return (
    <section id="projets" className="projects">
      <h1 className="projects__title">
        Pr<span className="projects__title__span">o</span>jets
      </h1>
      <div className="projects__container">
        <Slider {...settings}>
          <ProjectCard
            id={1}
            title="Harry Potter"
            picture={harry}
            link="https://harrypotter.benjamingodey.fr/"
            presentation="Front réalisé avec React et Redux, API crée via Symfony"
          />
          <ProjectCard
            id={2}
            title="My Wallet"
            picture={myWallet}
            link="https://youtu.be/rxbDbHNwjUE?t=414"
            presentation="Projet de fin de formation, réalisé par 5 personnes (3 back et 2 front) en un mois. "
          />
          <ProjectCard
            id={3}
            title="Chez Benj"
            picture={chezBenj}
            link="https://location.benjamingodey.fr/"
            presentation="Projet fictif pour entrainement à Symfony. Front en react, back (contact et connection à Google Calendar) en Symfony"
          />
        </Slider>
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
