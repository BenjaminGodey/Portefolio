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
    <main
      id="accueil"
      className="main"
    >
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
          <table className="main__table">
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
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-css3"></i>
                  </div>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-php"></i>
                  </div>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-solid fa-database"></i>
                  </div>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-js"></i>
                  </div>
                </td>
                <td className="main__table--logo">
                  <div className="main__table--div">
                    <i className="table-icon fa-brands fa-react"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="main__table--td">
                  HTML
                </td>
                <td colSpan="2" className="main__table--td">
                  PHP
                </td>
                <td colSpan="2" className="main__table--td">
                  JavaScript
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="main__table--td">
                  CSS
                </td>
                <td colSpan="2" className="main__table--td">
                  SQL
                </td>
                <td colSpan="2" className="main__table--td">
                  React
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
