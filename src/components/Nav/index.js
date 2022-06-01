// == Import NPM
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

// == Import local
import "./nav.scss";
import logo from "../../assets/img/nav_logo.png";

// == Composant
function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <BrowserRouter>
          <HashLink smooth to="#">
            <img src={logo} className="navigation__logo" alt="initiales" />
          </HashLink>
          <ul className="navigation-menu__list">
            <NavHashLink smooth to="#accueil">
              <li className="navigation-menu__item">
                <p className="navigation-menu__link">Accueil</p>
              </li>
            </NavHashLink>

            <li className="navigation-menu__item">
              <NavHashLink smooth to="#parcours">
                <p className="navigation-menu__link">Parcours</p>
              </NavHashLink>
            </li>

            <NavHashLink smooth to="/#projets">
              <li className="navigation-menu__item">
                <p className="navigation-menu__link">Projets</p>
              </li>
            </NavHashLink>
            <NavHashLink smooth to="#contact">
              <li className="navigation-menu__item">
                <p className="navigation-menu__link">Contact</p>
              </li>
            </NavHashLink>
          </ul>
        </BrowserRouter>
      </div>
    </nav>
  );
}

export default Nav;
