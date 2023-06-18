import { useEffect, useRef, useState } from "react";
import css from "../../public/css.png";
import git from "../../public/git.png";
import html from "../../public/html.png";
import javaScript from "../../public/javaScript.png";
import react from "../../public/react.png";
import sass from "../../public/sass.png";

const IMG = [
  {
    alt: "HTML",
    img: html,
    className: "img-front",
    position: "front",
  },
  {
    alt: "CSS",
    img: css,
    className: "img-top",
    position: "top",
  },
  {
    alt: "SASS",
    img: sass,
    className: "img-back",
    position: "back",
  },
  {
    alt: "JAVASCRIPT",
    img: javaScript,
    className: "img-right",
    position: "right",
  },
  {
    alt: "REACT",
    img: react,
    className: "img-left",
    position: "left",
  },
  {
    alt: "GIT",
    img: git,
    className: "img-bottom",
    position: "bottom",
  },
];

export const Skills = () => {
  const [name, setName] = useState("HTML");
  const toolRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toolRef.current.classList.add("typewriter_skills");
    }, 0);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [name]);

  function rotateCube(side, newName) {
    const cube = document.querySelector(".cube");
    cube.setAttribute("class", `cube show-${side}`);
    toolRef.current.classList.remove("typewriter_skills");
    setName(newName);
  }

  return (
    <section className="skills main__section" id="Habilidades">
      <h2 className="skills__title"> Habilidades</h2>
      <div className="skills__container">
        <div className="cube show-front">
          {IMG.map((item, i) => (
            <img
              key={`pw${i}`}
              className={`skills__img ${item.className}`}
              src={item.img}
              alt={item.alt}
            />
          ))}
        </div>

        <span className="skills__name-tool" ref={toolRef}>
          {name}
        </span>

        <div className="actions">
          {IMG.map((item, i) => (
            <button
              key={i + 2}
              className="skills__button"
              onClick={() => rotateCube(item.position, item.alt)}
            >
              <img className=" actions__img" src={item.img} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
