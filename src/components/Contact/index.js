// == Import NPM
import { useState, useEffect } from "react";
import { send } from "@emailjs/browser";
// == import styles
import "./contact.scss";

// == Component
function Contact() {
  const [scrollContact, setScrollContact] = useState(false);

  // Show contact container when user scroll 3.7 windows size (1 innerHeigt = 100vh)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollContact(window.scrollY > window.innerHeight * 3.7);
    });
    return () => window.removeEventListener("scroll", setScrollContact);
  }, []);

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_fbim1nh", "template_lcbctrc", toSend, "aE48_2NTVNVwaSGHs")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailSent(true);
      })
      .catch((err) => {
        alert("Erreur...", err);
      });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">
        C<span className="contact__title__span">o</span>ntact
      </h1>
      <div
        className={
          scrollContact
            ? "contact__container contact__container--scroll"
            : "contact__container"
        }
      >
        <div className="contact__mail">
          <form className="form"
          onSubmit={onSubmit}>
            <input
              className="form__input form__input--mail"
              type="text"
              name="from_name"
              placeholder="Nom"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <input
              className="form__input form__input--mail"
              type="text"
              name="reply_to"
              placeholder="Email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <textarea
              className="form__input form__input--message"
              type="text"
              name="message"
              placeholder="Votre Message"
              value={toSend.message}
              onChange={handleChange}
            />

            <button className="form__button" type="submit">Envoyer</button>
            
          </form>
          {emailSent && 
            <p className="contact__success">Envoi du formulaire effectué</p>
          }
        </div>
        <div className="contact__github">
          {/* SVG to animate letter arround circle */}
          <div id="circle">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text fill="#000">
                  <textPath xlinkHref="#circlePath">
                    Retrouvez-moi sur GitHub!
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <a className="contact__link" href="https://github.com/BenjaminGodey">
            <div className="contact__logo contact__logo--github">
              <i className="contact__icon fa-brands fa-github"></i>
            </div>
          </a>
        </div>
        <div className="contact__linkedin">
          <div id="circle">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text fill="#000">
                  <textPath xlinkHref="#circlePath">
                    Retrouvez-moi sur Linkedin!
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <a href="https://www.linkedin.com/in/benjamin-godey-162397162/">
            <div className="contact__logo contact__logo--linkedin">
              <i className="contact__icon fa-brands fa-linkedin"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
