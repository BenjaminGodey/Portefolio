// == import npm
import { useState } from "react";

// == import styles
import "./card.scss";

//== Component
function Card({ picture, title, presentation, link }) {

  const [isFlip, setIsFlip] = useState(false);

  return (
    <div className="fx-wrap">
      <div className={isFlip ? "card flip-it" : "card"}>
        <div className="front">
          <div
            style={{ backgroundImage: `url(${picture})` }}
            className="front__image"
          ></div>
          <div className="text">
            <header className="text__header">
              <button
                className="flip"
                onClick={() => {
                  setIsFlip(!isFlip);
                }}
              >
                <i className="flip__arrow fa-solid fa-arrow-rotate-right"></i>
              </button>
            </header>
            <p className="text__title">{title}</p>
          </div>
        </div>
        <div className="back">
          <div className="text">
            <header className="text__header">
              <button
                className="flip"
                onClick={() => {
                  setIsFlip(!isFlip);
                }}
              >
                <i class="flip__arrow fa-solid fa-arrow-rotate-right"></i>
              </button>
            </header>
            <p className="text__presentation">{presentation}</p>
            <a className="card__link" href={link}>
              See more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
