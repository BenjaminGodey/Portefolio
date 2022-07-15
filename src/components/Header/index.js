// == Import NPM
import { useEffect, useState } from "react";

// == Import local
import "./header.scss";
import title from "../../assets/img/title.png";

// == Composant
function Header() {
  const [scroll, setScroll] = useState(false);

  // Use to increase title underline size on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    return () => window.removeEventListener("scroll", setScroll);
  }, []);

  return (
    // empty Id for nav purpose (top of the page)
    <header className="header" id="">
      <img className="header__logo" src={title} alt="nom et prenom" />
      <div className="header__container">
        <div className="header__subtitle">
          <span className="header__span">&lt;h2&gt; </span>Développeur Web{" "}
          <span className="header__span">&lt;/h2&gt; </span>
        </div>
      </div>
      <div className="header__title">
        <p className="header__1">Bonjour</p>
        <div className="header__2-3-container">
          <p className="header__2">et</p>
          <p className={scroll ? "header__3 header__3--scroll" : "header__3"}>
            Bienvenue
          </p>
        </div>
      </div>
      <div className="icon-scroll"></div>
    </header>
  );
}

export default Header;
