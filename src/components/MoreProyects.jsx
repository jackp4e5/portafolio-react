import { Link } from "react-router-dom";
import form from "../img/form.jpg";
import how from "../img/interative-rating.jpg";
import faq from "../img/faq.jpg";
import popup from "../img/article-preview.jpg";
import card from "../img/qr-code.jpg";
import social from "../img/social-proof.jpg";
import product from "../img/pruduc-preview-card.jpg";
import browser from "../img/browser.png";
import github from "../img/github.png";
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
  {
    title: "Card-QR",
    image: card,
    hrefWeb: "https://qr-frontend-mentor.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/QR-frontend-mentor",
  },
  {
    title: "Social",
    image: social,
    hrefWeb: "https://fem-social-proof-jack.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/fem-social-proof-jack",
  },
  {
    title: "Interative-rating",
    image: how,
    hrefWeb: "https://fem-interative-rating-component-jack.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/interactive-rating-component",
  },
  {
    title: "Product",
    image: product,
    hrefWeb: "https://fem-preview-card-jack.netlify.app/",
    hrefGithub: "https://github.com/jackp4e5/fem-preview-card",
  },
];

export const MoreProyects = () => {
  return (
    <>
      <section className="projects main__section " id="projects">
        <h2 className=" projects__title ">Proyectos</h2>
        <div className="projects__grid">
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

        <Link to="/" className="projects__button">
          Volver
        </Link>
      </section>
    </>
  );
};
