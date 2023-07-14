import form from "../img/form.jpg";
import popup from "../img/article-preview.jpg";
import faq from "../img/faq.jpg";
import browser from "../img/browser.png";
import github from "../img/github.png";
import { Link } from "react-router-dom";

const CARD = [
  {
    title: "Formulario",
    image: form,
    hrefWeb: "https://sing-up-form-jack.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/fem-faq-accordion",
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
        Para poner a prueba mis habilidades, utilizo los diseños publicados en{" "}
        <a
          href="https://www.frontendmentor.io/profile/jackp4e5"
          target="_blank"
          className="ref"
        >
          Frontend-Mentor,
        </a>{" "}
        Esta página provee retos en diversos niveles de dificultad que asemejan
        esenarios de la vida real. Resolverlos me ayuda a ampliar mis
        conocimientos y mejorar mi destreza para solucionarlos.{" "}
      </p>

      <p className="projects__description">
        A continuación, encontrarás las soluciones destacadas en las que enfoqué
        mi atención en el correcto uso de las etiquetas HTML, aplicación de
        estilos con CSS, y validación de formularios con JAVASCRIPT.
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
                  className="flex__web-button"
                >
                  <img className="networks__svg" src={browser} alt="" />
                  <span className="flex__socials">web</span>
                </a>

                <a
                  href={`${item.hrefGithub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex__github-button"
                >
                  <img className="networks__svg" src={github} alt="" />
                  <span className="flex__socials">github</span>
                </a>
              </span>
            </div>
          </article>
        ))}
      </div>

      <Link to="/projects" title="more works" className="projects__button">
        Ver más
      </Link>
    </section>
  );
};
