// == Import NPM
import { useEffect, useState } from "react";

// == Import styles
import "./homepage.scss";

// == Component
function Homepage() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight * 0.5);
    });
  }, []);

  return (
    <main id="accueil" className="main">
      {/* Empty Div for background image and facilitate responsive */}
      <div className="main__left"></div>
      <div className="main__right">
        <div
          className={scroll ? "tdimension tdimension--scroll" : "tdimension"}
        >
          <div className="picture"></div>
        </div>
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

          {/*           <table className="main__table">
            <thead>
              <tr>
                <th colSpan="6">Langages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="main__table--tr">
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-html5"></i>
                  </div>
                  <p className="table__name">HTML</p>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                  
                    <i className="table-icon fa-brands fa-css3"></i>
                  </div>
                  <p className="table__name">CSS</p>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-php"></i>
                  </div>
                  <p className="table__name">PHP</p>
                </td>
                </tr>
                <tr className="main__table--tr">
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-solid fa-database fa-2x"></i>
                  </div>
                  <p className="table__name">SQL</p>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-js"></i>
                  </div>
                  <p className="table__name">Javascript</p>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-react"></i>
                  </div>
                  <p className="table__name">React</p>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </main>
  );
}

export default Homepage;
