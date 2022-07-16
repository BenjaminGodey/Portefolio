// == Import NPM
import { useEffect, useState } from "react";

// == Import styles
import "./homepage.scss";

// == Import Local
import portrait from "../../assets/img/homepage/portrait.jpeg";
import html from "../../assets/img/homepage/html.png";
import javascript from "../../assets/img/homepage/javascript.png";
import php from "../../assets/img/homepage/php.png";
import react from "../../assets/img/homepage/react.png";
import sql from "../../assets/img/homepage/sql.png";
import symfony from "../../assets/img/homepage/symfony.png";


// == Component
function Homepage() {
  const [isShowPicture, setIsShowPicture] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsShowPicture(window.scrollY > window.innerHeight * 0.6);
    });
    return () => window.removeEventListener("scroll", setIsShowPicture);
  }, []);

  return (
    <main id="accueil" className="main">
      <div className="main__container">
        <div className="profil__container">
          <h1 className="profil__title">
            Hell<span className="profil__title__span">o</span>!
          </h1>

          <p className="profil__text">
            Je suis Benjamin, Développeur Web junior, actuellement en recherche
            d'emploi dans les Côtes d'Armor ou en Full Remote.
          </p>
          <div className="profil__skills">
            <div className="profil__item">
              <div className="profil__div">
                <img src={html} alt="logo html" className="profil__icon" />
              </div>
              <p className="profil__name">HTML</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
              <img src={symfony} alt="logo Symfony" className="profil__icon" />
              </div>
              <p className="profil__name">Symfony</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
              <img src={php} alt="logo PHP" className="profil__icon" />
              </div>
              <p className="profil__name">PHP</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
              <img src={sql} alt="logo SQL" className="profil__icon" />
              </div>
              <p className="profil__name">SQL</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
              <img src={javascript} alt="logo Javascript" className="profil__icon" />
              </div>
              <p className="profil__name">Javascript</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
              <img src={react} alt="logo React" className="profil__icon" />
              </div>
              <p className="profil__name">React</p>
            </div>
          </div>
        </div>
        <div className="main__right">
          <img
            src={portrait}
            className={
              isShowPicture
                ? "main__picture main__picture--show"
                : "main__picture"
            }
            alt="Portrait Benjamin"
          />
          <p className="main__picture--text">
            N'hésitez pas à me rendre visite régulièrement, ce site sera mis à
            jour à chaque nouveau projet.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
