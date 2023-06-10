import form from "../img/form.jpg";
import popup from "../img/article-preview.jpg";
import faq from "../img/faq.jpg";
import { Link } from "react-router-dom";

const CARD = [
  {
    title: "Formulario",
    image: form,
    hrefWeb: "https://resplendent-licorice-0eae88.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/-sign-up-form",
  },
  {
    title: "Popup",
    image: popup,
    hrefWeb: "https://fem-article-preview2-jack.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/article-preview-2",
  },
  {
    title: "FAQ acordeon",
    image: faq,
    hrefWeb: "https://fem-faq-accordion-card-jack.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/fem-faq-accordion",
  },
];

export const Projects = () => {
  return (
    <section className="projects main__section " id="Proyectos">
      <h2 className=" projects__title animation">Proyectos</h2>

      <p className="projects__description">
        proyectos creados, como practica de mis habilidades, estos proyectos
        fueron tomados como ejemplo de{" "}
        <a
          href="https://www.frontendmentor.io/profile/jackp4e5"
          target="_blank"
          className="ref"
        >
          Frontend-Mentor,
        </a>{" "}
        dicha página provee diversos retos que me ayudaron a poner en practica
        mis conocimientos y aumentar un poco más mi destreza para
        desarrollarlos, cada uno de ellos tiene su nivel de dificultad, como
        manejo de etiquetas HTML, manejo de css y validación de formularios con
        JavaScript
      </p>
      <div className="projects__flex">
        {CARD.map((item, i) => (
          <article className="projects__art" key={i}>
            <figure className="projects__figure">
              <img
                className="img"
                src={item.image}
                alt={`${item.title}img`}
                loading="lazy"
              />
            </figure>
            <div className="projects__card">
              <span className="projects__card--title">
                {" "}
                <a
                  href="https://www.frontendmentor.io/profile/jackp4e5"
                  target="_blank"
                  className="underScore"
                >{`${item.title}`}</a>
              </span>

              <span className="flex">
                <a
                  href={`${item.hrefWeb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex__web--button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    fill="currentColor"
                    className="networks__svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span className="flex__socials">web</span>
                </a>

                <a
                  href={`${item.hrefGithub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex__web--button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="networks__svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="flex__socials">github</span>
                </a>
              </span>
            </div>
          </article>
        ))}
      </div>

      <Link to="/works" title="more works" className="projects__button">
        Ver más
      </Link>
    </section>
  );
};
