import { useRef } from "react";

const NAV = ["Inicio", "Proyectos", "Habilidades", "About"];

export const Header = () => {
  const header = useRef(null);
  const hamburgerSvg = useRef(null);
  const nav = useRef(null);
  const close = useRef(null);

  let main_location = window.pageYOffset;

  window.onscroll = () => {
    const displacement = window.pageYOffset;
    main_location >= displacement
      ? (header.current.style.top = "0")
      : (header.current.style.top = "-100px");

    main_location = displacement;
  };

  const toggleFn = () => {
    nav.current.classList.toggle("active");
    close.current.classList.toggle("active");
    hamburgerSvg.current.classList.toggle("inactive");
  };

  return (
    <>
      {}
      <header ref={header} className="header">
        <h1 className="header__logo">
          <a href="#" className="a">
            Jack Pachon
          </a>
        </h1>
        <a href="#" className="header__button" onClick={toggleFn}>
          <svg
            ref={hamburgerSvg}
            className="svg__hamburger"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>

          <svg
            ref={close}
            className="svg__close"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </a>
        <nav ref={nav} className="nav active">
          <ul className="nav__list">
            {NAV.map((item) => (
              <li className="nav__list-item" key={item}>
                <a href={`#${item}`} title={`${item}`} className="underScore">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
