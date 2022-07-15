// == Import NPM
import { useEffect, useState } from "react";

// == Import styles
import "./homepage.scss";

// == Import Local
import portrait from "../../assets/img/homepage/portrait.jpeg";

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
                <i className="profil__icon fa-brands fa-html5"></i>
              </div>
              <p className="profil__name">HTML</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
                <i className="profil__icon fab fa-symfony"></i>
              </div>
              <p className="profil__name">Symfony</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
                <i className="profil__icon fa-brands fa-php"></i>
              </div>
              <p className="profil__name">PHP</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
                <i className="profil__icon fa-solid fa-database"></i>
              </div>
              <p className="profil__name">SQL</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
                <i className="profil__icon fa-brands fa-js"></i>
              </div>
              <p className="profil__name">Javascript</p>
            </div>
            <div className="profil__item">
              <div className="profil__div">
                <i className="profil__icon fa-brands fa-react"></i>
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
